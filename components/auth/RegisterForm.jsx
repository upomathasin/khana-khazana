"use client";
import { registerAction } from "@/app/actions/userActions";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

export default function RegisterForm() {
  const router = useRouter();
  const handleRagister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await registerAction(formData);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully Registered !",
        showConfirmButton: false,
        timer: 2000,
      });
      router.replace("/login");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
      });
    }
  };
  return (
    <form className="login-form" onSubmit={handleRagister}>
      <div>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname" required />
      </div>

      <div>
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname" required />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Create Account
      </button>
    </form>
  );
}
