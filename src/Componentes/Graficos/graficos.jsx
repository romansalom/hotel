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
  const [isIntersecting, setIsIntersecting] = useState(false); // Estado para saber si el componente está en vista

  const data = {
    labels: Array.from({ length: 50 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Inversión A',
        data: [
          0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
          12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000,
          22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000, 31000,
          32000, 33000, 34000, 35000, 36000, 37000, 38000, 39000, 40000, 41000,
          42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000, 50000, 51000,
          52000, 53000, 54000, 55000, 56000, 57000, 58000, 59000,
        ],
        fill: false,
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fondo negro con transparencia
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 7, // Aumentar el grosor de la línea
        tension: 0.6,
        pointRadius: 0, // Tamaño de los puntos (0 para eliminarlos)
        pointHoverRadius: 0, // Curvar la línea para un efecto parabólico
      },
      {
        label: 'Inversión B',
        data: [
          0, 700, 1400, 2100, 2800, 3500, 4200, 4900, 5600, 6300, 7000, 7700,
          8400, 9100, 9800, 10500, 11200, 11900, 12600, 13300, 14000, 14700,
          15400, 16100, 16800, 17500, 18200, 18900, 19600, 20300, 21000, 21700,
          22400, 23100, 23800, 24500, 25200, 25900, 26600, 27300, 28000, 28700,
          29400, 30100, 30800, 31500, 32200, 32900, 33600, 34300, 35000, 35700,
          36400, 37100, 37800, 38500, 39200, 39900, 40600, 41300,
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
          }
        });
      },
      {
        threshold: 0.1, // El componente debe estar completamente visible
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
          color: 'black', // Color de los ticks en el eje X
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
          color: 'black', // Color de los ticks en el eje Y
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
  return (
    <div className="componentesa" ref={chartRef}>
      <div className="chart-container">
        <div className="bg-white-100 py-12 px-4 font-[sans-serif] text-[#333]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-5 text-center">
              Inverti En Vacamuerta
            </h2>
            <h4 className="text-2xl font-bold mb-12 text-center">
              Comparando inversión con Capital al pasar del tiempo
              <svg
                onClick={handleRepeatAnimation}
                className="w-6 h-6 ml-2 text-gray-800 dark:text-white cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                  clipRule="evenodd"
                />
              </svg>
            </h4>
          </div>
        </div>

        {chartData &&
          isIntersecting && ( // Solo renderizar el gráfico cuando esté en la vista
            <Line
              key={animationKey}
              data={chartData}
              options={chartOptions}
              width={400} // Ancho fijo para el gráfico
              height={300} // Alto fijo para el gráfico
            />
          )}
      </div>
    </div>
  );
};

export default InvestmentComparisonChart;
