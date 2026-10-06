import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../utils/api";
import { debug } from "../../../utils/debug";

const useRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    debug.log("📤 Register Data:", data);
    try {
      const res = await API.post("/users/register", data);
      localStorage.setItem("token", res.data.token);
      debug.log("✅ Token saved:", res.data.token);
      toast.success("Registration Successful!");
      navigate("/profile");
    } catch (err) {
      debug.error("Registration Error:", err.response?.data || err.message);
      toast.error("Registration Failed!");
    }
  };

  return { register, handleSubmit, onSubmit, errors };
};

export default useRegister;