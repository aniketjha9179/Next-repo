"use client";
import { useState } from "react";
import "./../style.css";
export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.success) {
      alert("new user added");
    } else {
      alert("sone error with data plaese and try again");
    }
    console.log(response);

    // console.log(name,age,email);
  };

  return (
    <div className="add-user">
      <h2>add new user</h2>
      <input
        className="input-filed"
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-filed"
        type="text"
        placeholder="enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        className="input-filed"
        type="text"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addUser} className="btn">
        Add user
      </button>
    </div>
  );
}
