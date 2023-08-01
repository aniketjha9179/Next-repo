import React from "react";

async function GetUsers(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.result;
}

const page = async ({ params }) => {
  // console.log(params);
  let user = await GetUsers(params.userid);
  console.log(user);

  return (
    <div>
      user detail
      <h4>Name:{user.name} </h4>
      <h4>email:{user.email} </h4>
      <h4>age:{user.age} </h4>
      <h4>id:{user.id} </h4>
    </div>
  );
};

export default page;
