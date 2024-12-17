
import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
const session = await auth()
  
console.log("home",session);

  return (
    <>
      <h1>Hello</h1>
      <div className="flex gap-5 mx-5">
        <Link
          href="/login"
          className="py-2 px-5  rounded text-slate-900 bg-slate-100"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="py-2 px-5  rounded text-slate-900 bg-slate-100"
        >
          Register
        </Link>
      </div>
    </>
  );
}
