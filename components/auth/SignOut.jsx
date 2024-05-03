"use client";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import Swal from "sweetalert2";
export default function SignOut() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const handleSignOut = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successful !",
      showConfirmButton: false,
      timer: 2000,
    });
    setAuth(null);
    router.push("/login");
  };
  return (
    <div>
      {auth ? (
        <div>
          <li className="py-2 bg-[gray] px-6 rounded-md text-white content-center">
            <button onClick={handleSignOut}>Logout</button>
          </li>
        </div>
      ) : (
        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <Link href="/login">Login</Link>
        </li>
      )}
    </div>
  );
}
