import { User } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(){
const data = User
return NextResponse.json(data, {status:200})
 }



export async function POST(request){
   let payload = await request.json()
   console.log(payload.name);
   if(!payload.name || !payload.age || !payload.email ){
      return NextResponse.json({result:'require field not found', success:false}, {status:400})
   }

   return NextResponse.json({result:" new user created", success:true},{status:201})
}


export function DELETE(request, content){
   let id = content.params.id
   if(id){
      return NextResponse.json({result:'user deleted', sucess:true}, {status:200})
   }else{

      return NextResponse.json({result:'user is not valid ', sucess:false}, {status:400})

   }
}