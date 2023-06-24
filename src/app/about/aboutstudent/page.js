'use client'
import Link from 'next/link';
import React from 'react'
import { useRouter } from "next/navigation";


const  about = ()=> {
  const router= useRouter();
  return (
    <div>
        <h1>
            hello about page  from nested routing
            {/* <Link href="/">go to home</Link> */}
            <br />
            <button onClick={() => { router.push("/");}}> Go to Home page</button>

        </h1>
    </div>
  )
}

export default about;