// Success Component - Step 3: Password Reset Successful
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-6 py-4">

      {/* Success Icon with Animation */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Outer glow rings */}
          <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping"></div>
          <div className="absolute inset-2 rounded-full bg-green-400/30 animate-pulse"></div>
          
          {/* Main check icon */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl shadow-green-500/40">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="white" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Password Reset!
        </h2>
        <p className="text-gray-600 text-sm max-w-xs mx-auto">
          Your password has been successfully changed. You can now log in with your new password.
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 max-w-xs mx-auto">
        <div className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-green-700 font-medium">
            All set! Your account is secure.
          </p>
        </div>
      </div>

      {/* Login Button */}
      <button
        onClick={() => navigate("/login")}
        className="w-full max-w-xs mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
        Go to Login
      </button>

      {/* Footer Note */}
      <p className="text-xs text-gray-400">
        Redirecting you in a moment? Click the button above.
      </p>
    </div>
  );
};

export default Success;