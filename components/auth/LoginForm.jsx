"use client";
import { loginAction } from "@/app/actions/userActions";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
export default function LoginForm() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const query = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      const user = await loginAction(query);

      if (user) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in !",
          showConfirmButton: false,
          timer: 2000,
        });

        setAuth(user);
        router.push("/");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
      });
      setError(err.message);
    }
  };
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Login
      </button>
      <div></div>
      {error && <p className=" text-orange-500 my-1">{error}</p>}
    </form>
  );
}
