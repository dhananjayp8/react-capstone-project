import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let newErrors = { ...errors };
    if (
      formData.name.trim().length === 0 ||
      formData.name === undefined ||
      formData.name === null
    ) {
      newErrors.name = "Name is required";
    } else {
      newErrors.name = "";
    }
    if (
      formData.username.trim().length === 0 ||
      formData.username === undefined ||
      formData.username === null
    ) {
      newErrors.username = "Username is required";
    } else {
      newErrors.username = "";
    }
    if (
      formData.email.trim().length === 0 ||
      formData.email === undefined ||
      formData.email === null
    ) {
      newErrors.email = "Email is required";
    } else {
      newErrors.email = "";
    }
    if (
      formData.mobile.trim().length === 0 ||
      formData.mobile === undefined ||
      formData.mobile === null
    ) {
      newErrors.mobile = "Mobile is required";
    } else {
      newErrors.mobile = "";
    }
    if (!formData.checkbox) {
      newErrors.checkbox = "Please accept the terms and conditions";
    } else {
      newErrors.checkbox = "";
    }
    setErrors({ ...newErrors });
    if (
      newErrors.name === "" &&
      newErrors.username === "" &&
      newErrors.email === "" &&
      newErrors.mobile === "" &&
      newErrors.checkbox === ""
    ) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          width: "50vw",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          width: "50vw",
          position: "relative",
        }}
      >
        <p
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            color: "white",
            fontSize: "5rem",
            whiteSpace: "pre-wrap", // This is used to wrap the text, 'this line is very very very very very very very very
            wordWrap: "break-word",
          }}
        >
          Discover new things on Superapp
        </p>
      </div>
      <form
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          maxWidth: "500px",
          width: "40vw",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "40vw",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={handleChange}
              style={{
                border: `1px solid  ${
                  errors.name.length > 0 ? "red" : "green"
                }`,
                borderRadius: "5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.name}</p>
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleChange}
              style={{
                border: `1px solid  ${
                  errors.username.length > 0 ? "red" : "green"
                }`,
                borderRadius: "5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.username}</p>
          </div>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              style={{
                border: `1px solid  ${
                  errors.email.length > 0 ? "red" : "green"
                }`,
                borderRadius: "5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.email}</p>
          </div>
          <div
            style={{
              backgroundColor: "cyan",
            }}
          >
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Mobile"
              onChange={handleChange}
              style={{
                border: `1px solid  ${
                  errors.mobile.length > 0 ? "red" : "green"
                }`,
                borderRadius: "5px",
              }}
            />
            <p style={{ color: "red" }}>{errors.mobile}</p>
          </div>

          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onChange={handleCheckbox}
            />
            <label htmlFor="checkbox">
              I agree to the terms and conditions
            </label>
            <p style={{ color: "red" }}>{errors.checkbox}</p>
          </div>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 10px",
            borderRadius: "20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "200px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
