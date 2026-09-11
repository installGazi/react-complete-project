// ForgotPassword Page - Modern, Stylish, Responsive
import useForgot from "../features/forgotPassword/hooks/useForgot";
import FormReq from "../features/forgotPassword/components/FormReq";
import FormReset from "../features/forgotPassword/components/FormReset";
import Success from "../features/forgotPassword/components/Success";

const ForgotPassword = () => {
  const {
    email, setEmail,
    token, setToken,
    newPass, setNewPass,
    step, loading, msg,
    sendLink, resetPass,
  } = useForgot();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 overflow-hidden">

          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Forgot Password?</h1>
            <p className="text-blue-100 text-sm mt-1">We'll help you reset it</p>
          </div>

          {/* Step Indicator */}
          <div className="px-8 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  step >= 1 ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-200 text-gray-500"
                }`}>
                  1
                </div>
                <span className="text-[10px] text-gray-500 mt-1 font-medium">Email</span>
              </div>
              <div className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                step >= 2 ? "bg-gradient-to-r from-blue-600 to-indigo-600" : "bg-gray-200"
              }`}></div>
              <div className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  step >= 2 ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-200 text-gray-500"
                }`}>
                  2
                </div>
                <span className="text-[10px] text-gray-500 mt-1 font-medium">Reset</span>
              </div>
              <div className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                step >= 3 ? "bg-gradient-to-r from-blue-600 to-indigo-600" : "bg-gray-200"
              }`}></div>
              <div className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  step >= 3 ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-200 text-gray-500"
                }`}>
                  3
                </div>
                <span className="text-[10px] text-gray-500 mt-1 font-medium">Done</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8 space-y-5">

            {/* Loading */}
            {loading && (
              <div className="flex items-center justify-center gap-2 py-2">
                <div className="w-5 h-5 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <span className="text-sm text-blue-600 font-medium">Loading...</span>
              </div>
            )}

            {/* Message */}
            {msg && (
              <div className={`p-3 rounded-xl border text-sm text-center font-medium ${
                msg.includes("সমস্যা") || msg.includes("Invalid") || msg.includes("failed")
                  ? "bg-red-50 border-red-200 text-red-700"
                  : "bg-green-50 border-green-200 text-green-700"
              }`}>
                {msg}
              </div>
            )}

            {/* Steps */}
            {step === 1 && (
              <FormReq
                email={email}
                setEmail={setEmail}
                sendLink={sendLink}
                loading={loading}
              />
            )}
            {step === 2 && (
              <FormReset
                token={token}
                setToken={setToken}
                newPass={newPass}
                setNewPass={setNewPass}
                resetPass={resetPass}
                loading={loading}
              />
            )}
            {step === 3 && <Success />}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Gazi Saiful. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;