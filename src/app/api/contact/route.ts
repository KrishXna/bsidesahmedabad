import Service from "@/service/server";
import { NextResponse } from "next/server";

type SuccessType<T> = {
  success: true;
  data: T;
};

type ErrorType<T> = {
  success: false;
  name: string;
  error: T;
};

function makeResponse<T>(type: "success", data: T): SuccessType<T>;
function makeResponse<T>(type: "error", name: string, data: T): ErrorType<T>;
function makeResponse<T = any>(
  type: "success" | "error",
  data: T,
  name?: string
): SuccessType<T> | ErrorType<T> {
  if (type === "success") {
    return {
      success: true,
      data,
    };
  }

  return {
    success: false,
    name: name || "",
    error: data,
  };
}

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
