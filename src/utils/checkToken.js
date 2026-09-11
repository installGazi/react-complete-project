const checkToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export default checkToken;