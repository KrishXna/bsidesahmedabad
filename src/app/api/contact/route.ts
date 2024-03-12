import Service from "@/service/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const service = new Service();
  try {
    const appwriteResponse = await service.createContact({
      email: data.email,
    });

    return NextResponse.json(makeResponse("success", {}));
  } catch (error: any) {
    const errRes =
      typeof error === "string" ? error : "Server error, please try again.";
    return NextResponse.json(makeResponse("error", errRes, "Appwrite Error"));
  }
}
