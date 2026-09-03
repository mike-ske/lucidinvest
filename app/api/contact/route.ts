// ✅ src/app/api/contact/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // handle your logic here
  console.log("Form data:", data);

  return NextResponse.json({ success: true, message: "Form submitted successfully!" });
}
