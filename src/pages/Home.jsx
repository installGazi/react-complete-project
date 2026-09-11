import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 w-full flex flex-col justify-between p-6 md:p-8">
      
      {/* Main Content Container */}
      <div className="w-full flex-1 flex flex-col justify-center max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 w-full">
          
          {/* Avatar - Standard Size */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl ring-4 ring-white/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="white"
                className="w-14 h-14 md:w-18 md:h-18"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
              Gazi Saiful
            </h1>
            <p className="text-lg md:text-xl text-blue-600 font-semibold mt-1">
              Full Stack Developer
            </p>
            <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed max-w-3xl">
              I build scalable, high-performance web applications using the MERN stack. 
              Focused on clean code, modern UI, and seamless user experiences.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1.5 rounded-full">MongoDB</span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full">Express.js</span>
              <span className="bg-sky-100 text-sky-800 text-xs font-medium px-3 py-1.5 rounded-full">React.js</span>
              <span className="bg-violet-100 text-violet-800 text-xs font-medium px-3 py-1.5 rounded-full">Node.js</span>
              <span className="bg-rose-100 text-rose-800 text-xs font-medium px-3 py-1.5 rounded-full">JWT Auth</span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1.5 rounded-full">Cloudinary</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm shadow-md transition duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2.5 rounded-lg text-sm transition duration-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200/70 w-full"></div>

        {/* Tech Stack Grid */}
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold text-center text-slate-700 mb-5">
            🛠️ My Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
            <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/60 text-center hover:shadow-md transition">
              <span className="block text-[10px] text-gray-400 font-mono">#1</span>
              <span className="font-semibold text-emerald-700 text-sm">MongoDB</span>
            </div>
            <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200/60 text-center hover:shadow-md transition">
              <span className="block text-[10px] text-gray-400 font-mono">#2</span>
              <span className="font-semibold text-amber-700 text-sm">Express.js</span>
            </div>
            <div className="bg-sky-50/80 p-3 rounded-xl border border-sky-200/60 text-center hover:shadow-md transition">
              <span className="block text-[10px] text-gray-400 font-mono">#3</span>
              <span className="font-semibold text-sky-700 text-sm">React.js</span>
            </div>
            <div className="bg-violet-50/80 p-3 rounded-xl border border-violet-200/60 text-center hover:shadow-md transition">
              <span className="block text-[10px] text-gray-400 font-mono">#4</span>
              <span className="font-semibold text-violet-700 text-sm">Node.js</span>
            </div>
            <div className="bg-rose-50/80 p-3 rounded-xl border border-rose-200/60 text-center hover:shadow-md transition">
              <span className="block text-[10px] text-gray-400 font-mono">#5</span>
              <span className="font-semibold text-rose-700 text-sm">JWT Auth</span>
            </div>
            <div className="bg-indigo-50/80 p-3 rounded-xl border border-indigo-200/60 text-center hover:shadow-md transition">
              <span className="block text-[10px] text-gray-400 font-mono">#6</span>
              <span className="font-semibold text-indigo-700 text-sm">Cloudinary</span>
            </div>
          </div>
          <p className="text-xs text-center text-gray-400 mt-5 font-mono">
            Built with ❤️ using the MERN stack
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200/60 text-center text-xs text-gray-400 w-full">
        © {new Date().getFullYear()} Gazi Saiful. All rights reserved.
      </div>
    </div>
  );
};

export default Home;