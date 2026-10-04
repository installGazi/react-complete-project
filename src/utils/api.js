
import axios from "axios";

// লোকালহোস্টে Vite proxy (/api) কাজ করবে, প্রোডাকশনে Vercel-এর Environment Variable কাজ করবে
const baseURL = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/api` 
  : "/api";

const api = axios.create({
  baseURL,
  withCredentials: true, // for sending and receiving cookies
});

export default api;
