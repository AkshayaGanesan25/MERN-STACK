import React, { useState } from "react";
import Form from "./Form";
import About from "./About";

const Home = () => {
  const [page, setPage] = useState("home"); 
  // pages: "home" | "login" | "about"

  return (
    <div style={{
      backgroundColor:"rgba(170, 194, 214, 1)",height:"100%",width: "100%",
   
    }}>
      <div>
      {page === "home" && ( 
        <button style={{
            padding: "12px 20px",
            fontSize: "18px",
            background: "#fb766aff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop:"250px",marginLeft:"500px"
          }} onClick={() => setPage("login")}>Click here to register...</button>
      )}

      {page === "login" && (
        <Form 
          onClose={() => setPage("home")} 
          onLoginSuccess={() => setPage("about")}
        />
      )}

      {page === "about" && (
        <About goHome={() => setPage("home")} />
      )}
      </div>
    </div>
  );
};

export default Home;
