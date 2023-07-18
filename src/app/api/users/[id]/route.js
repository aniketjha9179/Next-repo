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
