import { API_BASE_URL } from "@/config/constant";
import React from "react";

const page = () => {
  console.log(process.env.NODE_ENV);

  return (
    <div>
      enviroment variable in next js
      {process.env.NODE_ENV === "developement" ? 
        <h1>you are on development moode</h1>
       : 
        <h1>you are on production mode</h1>
      }
      {API_BASE_URL}
    </div>
  );
};

export default page;
