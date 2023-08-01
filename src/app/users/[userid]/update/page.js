"use client";

import { useEffect, useState } from "react";
import "../../../style.css";

export default function Page({ params }) {
  let id = params.userid;
  console.log(id);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/api/users/24" + id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);

    setEmail(data.result.email);
  };

  const updateUser = async () => {
    // console.log(name, email, age);
    let result = await fetch("http://localhost:3000/api/users/" + id, {
      method: "PUT",
      body:JSON.stringify({name, age, email})
    });
    result = await result.json()
    console.log(result);
  };

  return (
    <div className="add-user">
      <h1>Update user details</h1>
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
      <button onClick={updateUser} className="btn">
        update user
      </button>
    </div>
  );
}
