import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';
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
  const [hasAnimated, setHasAnimated] = useState(false); // Controlar si la animación inicial ha ocurrido
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Inversión A',
        data: [
          1500, 6700, 1900, 2100, 2300, 2500, 2700, 2900, 5100, 3300, 3500,
          3700, 3900, 4100, 4300, 4500, 2300, 4900, 5100, 5300, 5500, 5700,
          5900, 6100, 1900, 6500, 6700, 6900, 4100, 7300,
        ],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Inversión B',
        data: [
          2000, 5400, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000,
          4200, 7200, 4600, 4800, 2400, 5200, 5400, 7400, 5800, 6000, 6200,
          6400, 6600, 6800, 4800, 7200, 7400, 7600, 7800,
        ],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  useEffect(() => {
    if (inView && !hasAnimated) {
      setChartData(data);
      setAnimationKey((prevKey) => prevKey + 1);
      setHasAnimated(true); // Marca la animación como completada
    }
  }, [inView, hasAnimated]);

  const handleRepeatAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1); // Incrementa la clave para reiniciar la animación
  };

  const totalDuration = 10000;
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
        easing: 'linear',
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
        easing: 'linear',
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
    <div>
      <br />
      <div ref={ref} className="chart-container">
        <h2 className="chart-title">Comparación de Inversiones</h2>
        <p className="chart-description">
          Aquí puedes ver una comparación entre las inversiones A y B en los
          últimos 30 años.
        </p>
        {chartData && (
          <Line key={animationKey} data={chartData} options={chartOptions} />
        )}
        <button onClick={handleRepeatAnimation} className="repeat-button">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InvestmentComparisonChart;
