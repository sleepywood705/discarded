import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function useWindowClose(창닫기) {
  const navigate = useNavigate();
  
  return () => {
    navigate("/Portfolio/");
    창닫기();
  };
}

export function useStateChange(initialState = true) {
  const [state, setState] = useState(initialState);

  const OPEN = () => setState(true);
  const CLOSE = () => setState(false);
  const TOGGLE = () => setState(prev => !prev);

  return { state, OPEN, CLOSE, TOGGLE };
}

export function useFormChange(initialState = {}) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return [formData, handleChange, setFormData];
}

export function useHeadTo() {
  const navigate = useNavigate();
  return (path) => navigate(path);
}