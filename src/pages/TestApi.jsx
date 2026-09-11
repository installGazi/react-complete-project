import { useEffect, useState } from "react";
import api from "../utils/api";

const TestApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);
        const res = await api.get("/users/protected");
        setData(res.data);
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        setData("Unauthorized or Error!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  return <div>Response: {JSON.stringify(data)}</div>;
};

export default TestApi;