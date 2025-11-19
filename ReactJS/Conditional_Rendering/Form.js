import React, { useState } from "react";

const Form = ({ onClose, onLoginSuccess }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    city: "",
    state: "",
    psw: "",
    confirmPsw: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, email, phone, dob, gender, city, state, psw, confirmPsw } = formData;

    // Validation rules
    if (!name || !username || !email || !phone || !dob || !gender || !city || !state || !psw || !confirmPsw) {
      return setError("⚠ All fields are required.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return setError("⚠ Invalid email format.");
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      return setError("⚠ Phone number must be 10 digits.");
    }

    if (psw.length < 6) {
      return setError("⚠ Password must be at least 6 characters.");
    }

    if (psw !== confirmPsw) {
      return setError("⚠ Password and Confirm Password do not match.");
    }

    // Clear errors & show popup
    setError("");
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      onLoginSuccess();
    }, 1500);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <button style={styles.closeBtn} onClick={onClose}>✖</button>

        {/* Popup */}
        
        

        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Register</h2>

          <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} style={styles.input}/>
          <input type="text" name="username" placeholder="Enter Username" onChange={handleChange} style={styles.input}/>
          <input type="email" name="email" placeholder="Email ID" onChange={handleChange} style={styles.input}/>
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} style={styles.input}/>
          <input type="date" name="dob" onChange={handleChange} style={styles.input}/>

          <select name="gender" onChange={handleChange} style={styles.input}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input type="text" name="city" placeholder="City" onChange={handleChange} style={styles.input}/>
          <input type="text" name="state" placeholder="State" onChange={handleChange} style={styles.input}/>
          <input type="password" name="psw" placeholder="Password" onChange={handleChange} style={styles.input}/>
          <input type="password" name="confirmPsw" placeholder="Confirm Password" onChange={handleChange} style={styles.input}/>
         {error && <div style={styles.error}>{error}</div>}
          <button type="submit" style={styles.button}>Register</button>
          {showPopup && <div style={styles.popup}>Registration Successful 🎉</div>}
        </form>
      </div>
    </div>
  );
};

export default Form;

/************** Inline Styles **************/
const styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    Height: "100%",
    // background: "rgba(0,0,0,0.5)",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "380px",
    position: "relative",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.3s ease-in-out",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "12px",
    fontSize: "18px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  title: {
    textAlign: "center",
    marginBottom: "18px",
    fontSize: "24px",
    color: "#222",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#4CAF50",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "5px",
  },
  popup: {
    background: "#4CAF50",
    color: "#fff",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
    marginBottom: "12px",
  },
  error: {
    background: "#ff5555",
    color: "#fff",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
    marginBottom: "12px",
    fontWeight: "bold",
  },
};
