'use client';

export default function RegionSelectPage() {
  const handleSelect = (region: string) => {
    console.log(`Selected region: ${region}`);
    window.location.href = 'https://www.geeksupportpro.com/home';
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-tr from-[#0a1457] via-[#164cc0] to-[#76aff0] flex flex-col justify-between p-6 sm:p-12 text-white">

      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-72 h-72 sm:w-96 sm:h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 sm:w-[30rem] sm:h-[30rem] bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Section */}
      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <p className="text-cyan-100 font-bold text-xl md:text-3xl tracking-wide opacity-90">
          Welcome
        </p>

        <h1 className="md:text-6xl text-5xl font-extrabold tracking-tight mt-2 leading-snug">
          Select your region <br /> to continue
        </h1>
      </div>

      {/* Center Selection Buttons Container */}
      <div className="relative z-10 max-w-2xl mx-auto w-full flex flex-col gap-4 my-auto py-8 mt-5">

        {/* Canada Button */}
        <button
          onClick={() => handleSelect('Canada')}
          className="group relative flex items-center justify-between w-full p-4 sm:p-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:bg-white/25 hover:border-white/50 transition-all duration-300 active:scale-[0.98] cursor-pointer"
        >
          <div className="flex items-center gap-4">

            {/* Canada Flag Image */}
            <div className="w-12 h-8 md:w-20 md:h-15 rounded-md overflow-hidden shadow-sm flex-shrink-0 border border-white/20">
              <img
                src="https://flagcdn.com/w160/ca.png"
                alt="Canada flag"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-2xl md:text-4xl font-semibold tracking-wide">
              Canada
            </span>
          </div>

          {/* Arrow Indicator */}
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
            <svg
              className="w-4 h-4 translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        {/* United States Button */}
        <button
          onClick={() => handleSelect('United States')}
          className="group relative flex items-center justify-between w-full p-4 sm:p-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:bg-white/25 hover:border-white/50 transition-all duration-300 active:scale-[0.98] cursor-pointer"
        >
          <div className="flex items-center gap-4">

            {/* United States Flag Image */}
            <div className="w-12 h-8 md:w-20 md:h-15 rounded-md overflow-hidden shadow-sm flex-shrink-0 border border-white/20">
              <img
                src="https://flagcdn.com/w160/us.png"
                alt="United States flag"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-2xl md:text-4xl font-semibold tracking-wide">
              United States
            </span>
          </div>

          {/* Arrow Indicator */}
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
            <svg
              className="w-4 h-4 translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Enhanced Realistic Globe Illustration */}
      <div className="relative w-full flex justify-end pointer-events-none mt-auto overflow-hidden h-[220px] sm:h-[320px]">
        <div className="absolute -right-16 sm:-right-10 -bottom-20 sm:-bottom-28 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] opacity-80">

          {/* Outer Atmospheric Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-transparent blur-xl" />

          {/* Main Globe Body with Continents Silhouette via SVG */}
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full text-blue-200/30 drop-shadow-[0_0_25px_rgba(0,210,255,0.2)]"
            fill="currentColor"
          >

            {/* Globe Base Circle */}
            <circle
              cx="250"
              cy="250"
              r="220"
              className="text-blue-950/40"
              fill="currentColor"
            />

            <circle
              cx="250"
              cy="250"
              r="220"
              className="text-cyan-400/20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            {/* Latitude & Longitude Grid Lines */}
            <ellipse
              cx="250"
              cy="250"
              rx="220"
              ry="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="opacity-60"
            />

            <ellipse
              cx="250"
              cy="250"
              rx="90"
              ry="220"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="opacity-60"
            />

            <line
              x1="30"
              y1="250"
              x2="470"
              y2="250"
              stroke="currentColor"
              strokeWidth="1.5"
              className="opacity-50"
            />

            <line
              x1="250"
              y1="30"
              x2="250"
              y2="470"
              stroke="currentColor"
              strokeWidth="1.5"
              className="opacity-50"
            />

            {/* Stylized Continent Landmass Shapes */}
            <path
              d="M180,140 Q220,110 270,130 T340,180 Q380,220 360,280 T300,360 Q240,380 190,340 T150,260 Q130,190 180,140 Z"
              className="text-cyan-300/25"
              fill="currentColor"
            />

            <path
              d="M280,120 Q330,100 370,140 T410,220 Q390,270 340,250 T280,120 Z"
              className="text-blue-300/30"
              fill="currentColor"
            />

            <path
              d="M120,280 Q160,260 190,310 T140,380 Q100,350 120,280 Z"
              className="text-cyan-200/20"
              fill="currentColor"
            />
          </svg>

          {/* Dynamic Glowing Orbital Rings */}
          <div className="absolute inset-[-20px] rounded-full border border-cyan-300/40 rotate-[-25deg] scale-y-50 pointer-events-none shadow-[0_0_15px_rgba(0,210,255,0.3)]" />

          <div className="absolute inset-[-50px] rounded-full border border-dashed border-white/20 rotate-[15deg] scale-y-40 pointer-events-none" />

          {/* Horizon Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#367BB8]/80 via-transparent to-transparent rounded-full pointer-events-none" />
        </div>
      </div>

    </main>
  );
}
