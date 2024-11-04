// src/components/FormFeature.js
import React, { useState } from "react";

const FormFeature = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-feature">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </label>
    </div>
  );
};

export default FormFeature;