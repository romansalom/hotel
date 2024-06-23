import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'intersection-observer';
import './investmentComparisonChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InvestmentComparisonChart = () => {
  const [chartData, setChartData] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const chartRef = useRef(null); // Referencia para el componente gráfico
  const [showChart, setShowChart] = useState(true); // Estado para controlar la visualización del gráfico
  const [showText, setShowText] = useState(false); // Estado para controlar la visualización del texto
  const [isIntersecting, setIsIntersecting] = useState(false); // Estado para saber si el componente está en vista

  const data = {
    labels: Array.from({ length: 50 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Vacamuerta',
        data: [
          0, 1090, 2000, 3000, 4000, 5000, 6900, 7000, 8900, 9000, 10000, 11000,
          12000, 13000, 14000, 15900, 16000, 17900, 18000, 19000, 29000, 21000,
          22000, 23900, 24900, 25000, 26000, 27900, 28000, 29000, 39000, 31000,
          32000, 33000, 34000, 35000, 36000, 37000, 38000, 99000, 40000, 41000,
          42000, 43000, 44000, 49000, 46000, 49000, 48000, 49000, 50000, 59000,
          52000, 53000, 59000, 55000, 56000, 57000, 58000, 59000,
        ],
        fill: false,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fondo negro con transparencia
        borderColor: 'white',
        borderWidth: 7, // Aumentar el grosor de la línea
        tension: 0.6,
        pointRadius: 0, // Tamaño de los puntos (0 para eliminarlos)
        pointHoverRadius: 0, // Curvar la línea para un efecto parabólico
      },
      {
        label: 'Capital',
        data: [
          0, 745, 1440, 2400, 2804, 3540, 4400, 4400, 5400, 6540, 7040, 7400,
          8440, 9140, 9840, 10400, 11240, 11940, 12400, 13340, 14400, 14740,
          15800, 86100, 16580, 18500, 58280, 18800, 19800, 20800, 21800, 21780,
          22200, 22100, 23820, 54200, 25200, 25920, 26620, 27200, 28250, 28200,
          29900, 39100, 30900, 31900, 32900, 92900, 39600, 34900, 95000, 35900,
          36500, 37100, 35800, 35500, 39200, 39900, 40600, 41300,
        ],
        fill: false,
        backgroundColor: 'rgba(255, 215, 0, 0.2)', // Fondo dorado con transparencia
        borderColor: 'blue', // Borde dorado
        borderWidth: 7, // Aumentar el grosor de la línea
        tension: 0.6,
        pointRadius: 0, // Tamaño de los puntos (0 para eliminarlos)
        pointHoverRadius: 0, // Curvar la línea para un efecto parabólico
      },
      {
        label: 'otros',
        data: [
          0, 732, 1430, 3530, 2300, 3300, 3230, 4330, 3300, 63303, 7300, 7300,
          8300, 9130, 9300, 13200, 11300, 31900, 12630, 13300, 14300, 14300,
          15300, 16300, 16300, 17530, 18200, 18300, 13600, 23320, 31000, 21730,
          22300, 23300, 23800, 23500, 23200, 25230, 26300, 23300, 23200, 28300,
          29430, 30300, 33500, 33500, 33500, 32530, 33530, 34330, 35300, 35700,
          36300, 33100, 37300, 53500, 53200, 39300, 40530, 41330,
        ],
        fill: false,
        backgroundColor: 'rgba(255, 215, 0, 0.2)', // Fondo dorado con transparencia
        borderColor: 'rgb(255, 215, 0)', // Borde dorado
        borderWidth: 7, // Aumentar el grosor de la línea
        tension: 0.6,
        pointRadius: 0, // Tamaño de los puntos (0 para eliminarlos)
        pointHoverRadius: 0, // Curvar la línea para un efecto parabólico
      },
    ],
  };

  useEffect(() => {
    setChartData(data); // Cargar los datos del gráfico al iniciar

    // Configurar el Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          } else {
            setIsIntersecting(false);
          }
        });
      },
      {
        threshold: 0.1, // El componente debe estar al menos parcialmente visible
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current); // Observar el componente de gráfico
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current); // Dejar de observar el componente al desmontar
      }
    };
  }, []);

  const handleRepeatAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1); // Incrementa la clave para reiniciar la animación
  };

  const totalDuration = 6000; // Duración más lenta para la animación
  const delayBetweenPoints = totalDuration / data.labels.length;
  const previousY = (ctx) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1].getProps(['y'], true).y;

  const chartOptions = {
    animation: {
      x: {
        type: 'number',
        easing: 'easeInOutQuad',
        duration: delayBetweenPoints,
        from: NaN,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        },
      },
      y: {
        type: 'number',
        easing: 'easeInOutQuad',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        },
      },
    },
    interaction: {
      intersect: false,
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
      legend: false,
    },
    scales: {
      x: {
        type: 'linear',
        ticks: {
          color: 'white', // Color de los ticks en el eje X
          borderWidth: 2,
          font: {
            size: '15px', // Tamaño de la letra en el eje X
          }, // Grosor de los ticks en el eje X
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.0)', // Color de la cuadrícula en el eje X
          borderWidth: 2, // Grosor de la cuadrícula en el eje X
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Color de los ticks en el eje Y
          borderWidth: 2,
          font: {
            size: '13px', // Tamaño de la letra en el eje X
          }, // Grosor de los ticks en el eje Y
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.0)', // Color de la cuadrícula en el eje Y
          borderWidth: 2, // Grosor de la cuadrícula en el eje Y
        },
      },
    },
  };

  // Función para manejar la transición del gráfico al texto
  const handleChartTransition = () => {
    setShowChart(false); // Ocultar el gráfico
    setShowText(true); // Mostrar el texto

    // Después de 10 segundos, regresar al gráfico
    setTimeout(() => {
      setShowText(false);
      setShowChart(true);
    }, 10000);
  };

  return (
    <div className="componentesa" ref={chartRef}>
      <div className="chart-container">
        {showChart && ( // Mostrar el gráfico cuando showChart es true
          <div className="max-w-4xl mx-auto">
            <br></br>
          </div>
        )}

        {chartData &&
          showChart &&
          isIntersecting && ( // Mostrar el gráfico cuando se cumplen las condiciones
            <Line
              key={animationKey}
              data={chartData}
              options={chartOptions}
              width={400} // Ancho fijo para el gráfico
              height={300} // Alto fijo para el gráfico
            />
          )}

        {showText && ( // Mostrar el texto cuando showText es true
          <div className="text-center text-xl font-bold mt-5">
            Este es el cuadro de texto que se muestra durante 10 segundos.
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestmentComparisonChart;
