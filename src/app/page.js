import React from "react";
import custom from './custom.module.css'
import other from './other.module.css'
import outside from '@/style/outside.module.css'


function page() {
  return (
    <main className="main">
   
      <h1 className={custom.main}>css moduel with Next js</h1>
      <h2 className={other.main}>css moduel with Next js</h2>
      <h2 className={outside.main}>Outside css</h2>



    </main>
  );
}

export default page;
