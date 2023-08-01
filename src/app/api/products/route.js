import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json({ result: data, suceess: true });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result, suceess: true });
}

