"use client";
import Link from "next/link";
import "../style.css";
import Deleteuser from "@/utils/delete";

async function GetUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function Page() {
  let users = await GetUsers();
  console.log(users);
  return (
    <div>
      <h1>users List </h1>
      {users.map((item) => {
        return (
          <div className="user-item">
            <span>
              <Link href={`users/${item.id}`}>{item.name} </Link>
            </span>
            <span>
              <Link href={`users/${item.id}/update`}>edit</Link>
            </span>
            <span>
              <Deleteuser id={item.id} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
