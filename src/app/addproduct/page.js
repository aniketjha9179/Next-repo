"use client";
import React, { useState } from "react";
import "../style.css";

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  async function addProducts() {
    console.log(name, price, color, category, company);
    let result = await fetch('http://localhost:3000/api/products',{
      method:'post',
      body:JSON.stringify({name, price, color, category, company})
    });
    result = await result.json()
    if(result.success){
      alert('new product added')
    }
    
  }

  return (
    <div>
      <div className="wrapper">
        <h1 className="title">Add products</h1>
      </div>
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="enter item name"
      />

      <input
        className="input"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="enter item price"
      />

      <input
        className="input"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="text"
        placeholder="enter item color "
      />

      <input
        className="input"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        type="text"
        placeholder="enter item compamy"
      />

      <input
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="enter item category"
      />
      <button onClick={addProducts} className="btn">
        Add Product
      </button>
    </div>
  );
};

export default Page;
