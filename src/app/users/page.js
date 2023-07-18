import Link from "next/link";

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
        return <div>
            <Link href={`users/${item.id}`}>{item.name} </Link>
            </div>;
      })}
    </div>
  );
}
