"use client";

export default function Lecture({ params }) {
  console.log(params);
  return (
    <div>
      <h1> {params.sam[0]}</h1>
      {/* <h2>{params} </h2> */}
    </div>
  );
}
