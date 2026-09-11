import { useState } from "react";
import API from "../../../utils/api";

const useForgot = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPass, setNewPass] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const sendLink = async () => {
    setLoading(true);
    setMsg("");
    try {
      const res = await API.post("/users/forgot-password", { email });
      setMsg(res.data.message || "রিসেট লিঙ্ক ইমেইলে পাঠানো হয়েছে!");
      if (res.data.resetToken) console.log("Reset Token:", res.data.resetToken);
      setStep(2);
    } catch (err) {
      setMsg(err.response?.data?.message || "ইমেইল পাঠাতে সমস্যা!");
    }
    setLoading(false);
  };

  const resetPass = async () => {
    setLoading(true);
    setMsg("");
    try {
      await API.post("/users/reset-password", { otp: token, password: newPass });
      setMsg("পাসওয়ার্ড রিসেট সফল!");
      setStep(3);
    } catch (err) {
      setMsg(err.response?.data?.message || "রিসেট করতে সমস্যা!");
    }
    setLoading(false);
  };

  return {
    email, setEmail,
    token, setToken,
    newPass, setNewPass,
    step, loading, msg,
    sendLink, resetPass,
  };
};

export default useForgot;