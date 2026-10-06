import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../utils/api";
import { debug } from "../../../utils/debug";

const useLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    debug.log("📤 Login Data:", data);
    try {
      const res = await API.post("/users/login", data);
      localStorage.setItem("token", res.data.token);
      debug.log("✅ Token saved:", res.data.token);
      toast.success("Login Successful!");
      navigate("/profile");
    } catch (err) {
      debug.error("Login Error:", err.response?.data || err.message);
      toast.error("Invalid email or password!");
    }
  };

  return { register, handleSubmit, onSubmit, errors };
};

export default useLogin;