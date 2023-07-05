// "use client";
// import React, { useState } from "react";
// import style from "./style.module.css";

// function page() {
//   const {red}=style
//   const [color, setColor] = useState("red");
//   return (
//     <main>
//    <h1  className={color == "red" ? style.red : style.green}>   Condtion with styling in Next Js</h1>
//    <h2 style={{backgroundColor:color=='red'?'red':'green'}}> Heading two</h2>
//    <h3 id={style.orange} > Heading three</h3>
//     <h4 className={red}>dummy text</h4>
//     <h4  className={red}>dummy text</h4>
//     <h4  className={red}>dummy text</h4>
//     <h4  className={red}>dummy text</h4>

//       <button onClick={()=>setColor('green')} >update</button>
//     </main>
//   );
// }

//image optimization

// // export default page;
// import React from "react";
// import profile from "../../public/vercel.svg";
// import Image from "next/image";

// function page() {
//   console.log(profile);
//   return (
//     <div>
//       <h2>image optimization</h2>
//       {/* <Image
//       // height={500}
//       // width={600}
      
//       src={profile}

//       />
//       <img
//       src={profile.src}/> */}
//       <Image
//         width={200}
//         height={200}
//         src="https://images.unsplash.com/photo-1682687221038-404cb8830901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
//       />
//     </div>
//   );
// }

// export default page;


// font optimization
// "use client"
// import { Roboto } from 'next/font/google'
// import React from 'react'
// const roboto =  Roboto({
//   weight:"100",
//   subsets:['latin'],
//   display:'swap',
// })

// function page() {
//   return (
//     <main>
//       <h2>fonts with link tag in next js</h2>
//       <h1 style={{fontFamily:'roboto',fontWeight:100,color:'grey'}}>font optimization in next js</h1>
//       <h1 className={roboto.className}>fonts with next js font feature</h1>

//     </main>
//   )
// }

// export default page\


import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page