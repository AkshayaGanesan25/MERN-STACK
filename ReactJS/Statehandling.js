import React, { useState } from 'react'

const Statehandling = () => {
  const [input, setInput] = useState({
    myname: "",
    myemail: ""
  });

  const [submittedData, setSubmittedData] = useState(null); // store submitted values

  const handelChange = (e) => {
  
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handel = (e) => {
    e.preventDefault();
    setSubmittedData(input); 
    setInput({ myname: "", myemail: "" }); 
  };

  return (
    <div style={{ textAlign: "center", margin: "100px" ,background:"rgba(141, 185, 187, 1)",width:"400px",padding:"50px" }}>
      <h2>User Form</h2>

      <input
        type="text"
        name="myname"
        value={input.myname}
        onChange={handelChange}
        placeholder="Enter a Name"
        style={{ margin: "5px", padding: "8px" }}
      />
      <br />

      <input
        type="email"
        name="myemail"
        value={input.myemail}
        onChange={handelChange}
        placeholder="Enter an Email"
        style={{ margin: "5px", padding: "8px" }}
      />
      <br />

      <button onClick={handel} style={{ padding: "8px 15px", cursor: "pointer",backgroundColor:"rgba(255, 46, 46, 1)" ,Color:"rgba(255, 46, 46, 1)"}}>
        Submit
      </button>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Welcome, {submittedData.myname}!</h3>
          <p>Your email: {submittedData.myemail}</p>
        </div>
      )}
    </div>
  );
};

export default Statehandling;


