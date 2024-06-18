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
          0, 67, 1900, 2100, 2300, 2500, 2700, 2900, 5100, 3300, 3500, 3700,
          3900, 4100, 4300, 4500, 2300, 4900, 5100, 5300, 5500, 5700, 5900,
          6100, 1900, 6500, 6700, 6900, 4100, 7300, 2000, 5400, 2400, 2600,
          2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 7200, 4600, 4800,
          2400, 5200, 5400, 7400, 5800, 6000, 6200, 6400, 6600, 6800, 4800,
          7200, 7400, 7600, 7800,
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
          0, 3, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200,
          7200, 4600, 4800, 2400, 5200, 5400, 7400, 5800, 6000, 6200, 6400,
          6600, 6800, 4800, 7200, 7400, 7600, 7800, 1500, 6700, 1900, 2100,
          2300, 2500, 2700, 2900, 5100, 3300, 3500, 3700, 3900, 4100, 4300,
          4500, 2300, 4900, 5100, 5300, 5500, 5700, 5900, 6100, 1900, 6500,
          6700, 6900, 4100, 7300,
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
        threshold: 1.0, // El componente debe estar completamente visible
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
            </h4>
          </div>
        </div>

        {chartData &&
          isIntersecting && ( // Solo renderizar el gráfico cuando esté en la vista
            <Line
              onClick={handleRepeatAnimation}
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
