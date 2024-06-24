import InvestmentComparisonChart from '../Graficos/graficos';

const BannerINversion = () => {
  return (
    <div class="bg-[#404040] px-8 py-14 font-[sans-serif] text-gray-300">
      <div class="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
        <div>
          <h1 class="text-4xl font-bold text-[#f2d6a2]">Startup Website</h1>
          <p class="mt-6 text-ml">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            accumsan, nunc et tempus blandit, metus mi consectetur nibh, a
            pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.
          </p>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="bg-black flex flex-col items-center text-center rounded md:p-8 p-6">
            <h3 class="lg:text-5xl text-3xl font-extrabold text-[#f2d6a2]">
              5.4
            </h3>
            <div class="mt-4">
              <p class="text-sm text-[#f2d6a2]">Total Users</p>
            </div>
          </div>
          <div class="bg-black flex flex-col items-center text-center rounded md:p-8 p-6">
            <h3 class="lg:text-5xl text-3xl font-extrabold text-[#f2d6a2]">
              $80K
            </h3>
            <div class="mt-4">
              <p class="text-sm text-[#f2d6a2]">Revenue</p>
            </div>
          </div>
          <div class="bg-black flex flex-col items-center text-center rounded md:p-8 p-6">
            <h3 class="lg:text-5xl text-3xl font-extrabold  text-[#f2d6a2]">
              100K
            </h3>
            <div class="mt-4">
              <p class="text-sm text-[#f2d6a2]">Engagement</p>
            </div>
          </div>
          <div class="bg-black flex flex-col items-center text-center rounded md:p-8 p-6">
            <h3 class="lg:text-5xl text-3xl font-extrabold  text-[#f2d6a2]">
              99.9%
            </h3>
            <div class="mt-4">
              <p class="text-sm text-[#f2d6a2]">Server Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerINversion;
