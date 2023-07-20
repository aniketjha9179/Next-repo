import { User } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const data = User;
  // console.log(data,content.params.id);
  const userData = User.filter((item) => item.id == content.params.id);

  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data found ", success: false }
      : { result: userData[0], success: true },
    { status: 200 }
  );
}

export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = content.params.id;
  console.log(payload);

  if(!payload.id ||!payload.name||!payload.email){

  return NextResponse.json({ result: "data is not valid", success: false }, { status: 400 });


  }

  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}
