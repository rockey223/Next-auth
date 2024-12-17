
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

export default async function Home() {
const session = await auth()

  
console.log("home",session);

// async function getMe(){
  
//   const res = await axios.get("http://localhost:5000/customerApi/customerGetMe",{
//     headers:{
//       cookie: `usertoken=${session.user.accessToken}`
//     }
    
//   })
//   console.log("after login",res.data);

// }
// getMe()
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
