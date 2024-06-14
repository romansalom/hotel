import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'intersection-observer';
import './investmentComparisonChart.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fondo negro con transparencia
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 5, // Aumentar el grosor de la línea
        tension: 0.3,
        pointRadius: 0, // Tamaño de los puntos (0 para eliminarlos)
        pointHoverRadius: 0, // Curvar la línea para un efecto parabólico
      },
      {
        label: 'Inversión B',
        data: [
          2000, 5400, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000,
          4200, 7200, 4600, 4800, 2400, 5200, 5400, 7400, 5800, 6000, 6200,
          6400, 6600, 6800, 4800, 7200, 7400, 7600, 7800,
        ],
        fill: false,
        backgroundColor: 'rgba(255, 215, 0, 0.2)', // Fondo dorado con transparencia
        borderColor: 'rgb(255, 215, 0)', // Borde dorado
        borderWidth: 6, // Aumentar el grosor de la línea
        tension: 0.4,
        pointRadius: 0, // Tamaño de los puntos (0 para eliminarlos)
        pointHoverRadius: 0, // Curvar la línea para un efecto parabólico
      },
    ],
  };

  useEffect(() => {
    // Cargar los datos del gráfico al iniciar
    setChartData(data);
    AOS.refresh(); // Actualiza AOS después de cargar el gráfico
  }, []);

  const handleRepeatAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1); // Incrementa la clave para reiniciar la animación
  };

  const totalDuration = 3000; // Duración más rápida para la animación
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
    <div className="componentesa" data-aos="fade-up">
      <div className="chart-container" data-aos="fade-up">
        <div class="bg-white-100 py-12 px-4 font-[sans-serif] text-[#333]">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-extrabold mb-5 text-center">
              Inverti En Vacamuerta
            </h2>
            <h4 class="text-2xl font-bold mb-12 text-center">
              Comparando inversion con Capital al pasar del tiempo
            </h4>
            <br></br>
            <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-x-4 gap-y-8">
              <div class="mx-auto">
                <div class="w-28 h-28 bg-white flex items-center justify-center shrink-0 border-2 rounded-full">
                  <h3 class="text-2xl font-extrabold">200%</h3>
                </div>
                <div class="text-center mt-4">
                  <p class="text-lg font-bold">Partners</p>
                </div>
              </div>
              <div class="mx-auto">
                <div class="w-28 h-28 bg-white flex items-center justify-center shrink-0 border-2 rounded-full">
                  <h3 class="text-2xl font-extrabold">300%</h3>
                </div>
                <div class="text-center mt-4">
                  <p class="text-lg font-bold">Projects</p>
                </div>
              </div>
              <div class="mx-auto">
                <div class="w-28 h-28 bg-white flex items-center justify-center shrink-0 border-2 rounded-full">
                  <h3 class="text-2xl font-extrabold">15%</h3>
                </div>
                <div class="text-center mt-4">
                  <p class="text-lg font-bold">Countries</p>
                </div>
              </div>
              <div class="mx-auto">
                <div class="w-28 h-28 bg-white flex items-center justify-center shrink-0 border-2 rounded-full">
                  <h3 class="text-2xl font-extrabold">500%</h3>
                </div>
                <div class="text-center mt-4">
                  <p class="text-lg font-bold">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              d="M8 18V6l8 6-8 6Z"
            />
          </svg>
        </button>
        {chartData && (
          <Line
            key={animationKey}
            data={chartData}
            options={chartOptions}
          ></Line>
        )}
      </div>
    </div>
  );
};

export default InvestmentComparisonChart;
