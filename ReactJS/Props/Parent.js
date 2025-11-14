import React from 'react'
import Card from './Card'
import girl from '../media/images/woman.png';
 
const Parent = () => {
  
    const headingStyle = {
   display:'flex',
   gap:"10px",
   justifyContent:"space-around",
   margin:"50px"
  };

  return (
    <div style={headingStyle}>
      <Card figu={girl} title="Akshaya Ganesan" description="She is a MERN stack developer who builds full-stack web applications using MongoDB, Express, React, and Node.js. She creates RESTful APIs, crafts responsive React UIs, and manages application state and data models. Focused on performance, clean code, and collaborative workflows, she delivers scalable, maintainable solutions." />
      <Card figu={girl} title="Haalidha Thamiha" description="She is a MERN stack developer who builds full-stack web applications using MongoDB, Express, React, and Node.js. She creates RESTful APIs, crafts responsive React UIs, and manages application state and data models. Focused on performance, clean code, and collaborative workflows, she delivers scalable, maintainable solutions." />
      <Card figu={girl} title="Vasuki Ganesan" description="She is a MERN stack developer who builds full-stack web applications using MongoDB, Express, React, and Node.js. She creates RESTful APIs, crafts responsive React UIs, and manages application state and data models. Focused on performance, clean code, and collaborative workflows, she delivers scalable, maintainable solutions." />
      <Card figu={girl} title="Yazhini " description="She is a MERN stack developer who builds full-stack web applications using MongoDB, Express, React, and Node.js. She creates RESTful APIs, crafts responsive React UIs, and manages application state and data models. Focused on performance, clean code, and collaborative workflows, she delivers scalable, maintainable solutions." />
    </div>
  )
}

export default Parent
