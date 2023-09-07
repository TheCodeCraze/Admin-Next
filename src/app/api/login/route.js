import User from "@/models/user";
import { connect } from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const searchParams = new URL(request.url).searchParams;
  const { email, password } = Object.fromEntries(searchParams.entries());
  try {
    await connect();
    const user = await User.findOne({ email: email });
    if (user) {
      const isPassCrct = await bcrypt.compare(password, user.password);
      if (isPassCrct) {
        return NextResponse.json(user);
      } else {
        return new NextResponse("Invalid credentials", { status: 401 });
      }
    } else {
      return new NextResponse("User not found", { status: 404 });
    }
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
