const useFormHandler = (setUser) => {
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    
    setUser((prev) => {
      const updated = { ...prev };
      updated[inputName] = inputValue;
      return updated;
    });
  };
  return handleChange;
};

export default useFormHandler;