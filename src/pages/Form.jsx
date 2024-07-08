import React from "react";
import { useState } from "react";
const Form = () => {
  const { formData, setFormData } = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  return (
    <div>
      <form
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          maxWidth: "300px",
          width: "40vw",
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          id="mobile"
          placeholder="Mobile"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleChechbox}
        />
        <label htmlFor="checkbox">I agree to the terms and conditions</label>
      </form>
    </div>
  );
};

export default Form;
