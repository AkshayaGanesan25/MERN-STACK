

import React from 'react'

const About = ({ goHome }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.text}>
          Welcome! We are committed to providing the best user experience.
          Our platform helps you access features seamlessly and securely.
        </p>

        <h3 style={styles.subTitle}>✨ What We Offer</h3>
        <ul style={styles.list}>
          <li>Fast and secure login experience</li>
          <li>User-friendly interface</li>
          <li>Modern web technology with React</li>
        </ul>

        <h3 style={styles.subTitle}>📩 Contact Us</h3>
        <p style={styles.text}>For support or feedback, reach out anytime:</p>
        <p style={styles.email}>support@example.com</p>

        <button style={styles.btn} onClick={goHome}>Logout</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f2f5ff",
    padding: "20px"
  },
  card: {
    background: "#fff",
    padding: "35px",
    borderRadius: "12px",
    maxWidth: "500px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  title: {
    margin: 0,
    fontSize: "32px",
    textAlign: "center",
    color: "#1a237e"
  },
  text: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
    marginTop: "14px"
  },
  subTitle: {
    marginTop: "22px",
    fontSize: "20px",
    color: "#283593"
  },
  list: {
    marginTop: "10px",
    lineHeight: "1.8",
    paddingLeft: "20px",
    color: "#444"
  },
  email: {
    fontWeight: "bold",
    color: "#1a237e"
  },
  btn: {
    marginTop: "25px",
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    background: "#3949ab",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
}

export default About

