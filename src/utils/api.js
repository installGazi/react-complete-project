

import axios from "axios";
const api = axios.create({
  baseURL: "/api",
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;


/*

//উপরের টা হলো বেক এন্ডের সাহায্য নিয়া কাজ করবে ।নিচের টা হলো মক এপিআই যা ফ্রন্ট এন্ডেই কাজ করবে।
// src/utils/api.js

// 🔥 localStorage থেকে ইউজার লিস্ট লোড
const getUsers = () => {
  const stored = localStorage.getItem("mockUsers");
  if (stored) {
    return JSON.parse(stored);
  }
  // ডিফল্ট ২ জন ইউজার
  return [
    { _id: "1", name: "Admin", email: "admin@example.com", role: "admin", isBlocked: false },
    { _id: "2", name: "Demo User", email: "demo@example.com", role: "user", isBlocked: false }
  ];
};

// 🔥 ইউজার লিস্ট সেভ
const saveUsers = (users) => {
  localStorage.setItem("mockUsers", JSON.stringify(users));
};

let users = getUsers();
let mockUser = { name: "", email: "" };

// 🔥 ===== নতুন: আপলোড লিস্ট (Mock) =====
let uploads = [];

const API = {
  post: async (url, data) => {
    console.log("📤 Mock POST:", url, data);
    
    if (url === "/users/register") {
      const newUser = {
        _id: Date.now().toString(),
        name: data.name,
        email: data.email,
        role: "user",
        isBlocked: false,
      };
      users.push(newUser);
      saveUsers(users);
      mockUser = { name: data.name, email: data.email };
      console.log("✅ নতুন ইউজার যোগ:", newUser);
      return { 
        data: { 
          token: "mock-token-123", 
          user: mockUser 
        } 
      };
    }
    
    if (url === "/users/login") {
      users = getUsers();
      const found = users.find(u => u.email === data.email);
      if (found) {
        mockUser = { name: found.name, email: found.email };
        return { 
          data: { 
            token: "mock-token-123", 
            user: mockUser 
          } 
        };
      }
      throw new Error("ইউজার পাওয়া যায়নি!");
    }
    
    if (url === "/users/forgot-password") {
      console.log("🔑 আপনার OTP কোড:", "123456");
      return { data: { message: "OTP পাঠানো হয়েছে!", resetToken: "123456" } };
    }
    
    if (url === "/users/reset-password") {
      return { data: { message: "পাসওয়ার্ড রিসেট সফল!" } };
    }
    
    if (url === "/users/verify-password") {
      return { data: { success: true, valid: true, message: "পাসওয়ার্ড সঠিক" } };
    }
    
    // 🔥 ===== প্রোফাইল পিক আপলোড =====
    if (url === "/users/upload-profile-pic") {
      const picUrl = "https://picsum.photos/200?random=" + Date.now();
      return { data: { profilePic: picUrl } };
    }
    
    // 🔥 ===== ফাইল আপলোড (My Uploads) =====
    if (url === "/users/upload-file") {
      const newUpload = {
        _id: Date.now().toString(),
        url: "https://picsum.photos/300?random=" + Date.now(),
        description: data.description || "",
        fileType: "image",
        uploadedAt: new Date().toISOString()
      };
      uploads.push(newUpload);
      console.log("✅ নতুন আপলোড:", newUpload);
      return { 
        data: { 
          url: newUpload.url, 
          description: newUpload.description,
          fileType: newUpload.fileType
        } 
      };
    }
    
    return { data: { message: "Mock Success" } };
  },
  
  get: async (url) => {
    console.log("📤 Mock GET:", url);
    
    if (url === "/users/protected") {
      return { data: { user: mockUser } };
    }
    
    // 🔥 ===== মাই আপলোডস লিস্ট =====
    if (url === "/users/my-uploads") {
      console.log("📤 রিটার্ন করা আপলোড লিস্ট:", uploads);
      return { data: { uploads: uploads } };
    }
    
    if (url === "/users/all") {
      users = getUsers();
      console.log("📤 রিটার্ন করা ইউজার লিস্ট:", users);
      return { 
        data: { 
          users: users 
        } 
      };
    }
    
    return { data: { message: "Mock GET Success" } };
  },
  
  put: async (url, data) => {
    console.log("📤 Mock PUT:", url, data);
    
    if (url === "/users/update") {
      users = getUsers();
      const index = users.findIndex(u => u.email === mockUser.email);
      if (index !== -1) {
        users[index].name = data.name || users[index].name;
        users[index].email = data.email || users[index].email;
        saveUsers(users);
      }
      
      mockUser = { name: data.name || mockUser.name, email: data.email || mockUser.email };
      return { data: { message: "আপডেট সফল!", user: mockUser } };
    }
    
    if (url.startsWith("/users/block/")) {
      users = getUsers();
      const id = url.split("/").pop();
      const index = users.findIndex(u => u._id === id);
      if (index !== -1) {
        users[index].isBlocked = true;
        saveUsers(users);
      }
      return { data: { message: "ইউজার ব্লক করা হয়েছে!" } };
    }
    
    return { data: { message: "আপডেট সফল!" } };
  },
  
  delete: async (url) => {
    console.log("📤 Mock DELETE:", url);
    
    if (url.startsWith("/users/delete/")) {
      users = getUsers();
      const id = url.split("/").pop();
      users = users.filter(u => u._id !== id);
      saveUsers(users);
      return { data: { message: "ইউজার ডিলিট করা হয়েছে!" } };
    }
    
    // 🔥 ===== আপলোড ডিলিট =====
    if (url.startsWith("/users/upload/")) {
      const id = url.split("/").pop();
      uploads = uploads.filter(u => u._id !== id);
      console.log("🗑️ আপলোড ডিলিট করা হয়েছে:", id);
      return { data: { message: "আপলোড ডিলিট করা হয়েছে!" } };
    }
    
    return { data: { message: "ডিলিট সফল!" } };
  }
};

export default API;
*/