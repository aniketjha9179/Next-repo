"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const navigate =(name)=>{
    router.push(name)
  }

  return (
    <div>
      <h1>basic page routing </h1>
      <Link href={"./login"}>Go to Login Page</Link>
      <br />
      <Link href={"./about"}>Go to Login Page</Link>
      <br />
      <br />
      {/* <button onClick={() => { router.push("./login");}}> Go to login page</button> */}
      <button onClick={() => { navigate("./login");}}> Go to login page</button>
      <br />
      <br />

      <button onClick={() => { navigate("./about");}}> Go to  About</button>

        
    </div>
  );
}

export default page;
