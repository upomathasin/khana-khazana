import React from "react";

export default function LoadingLogin() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-5xl text-slate-700">
        Checking information..... <span className="mx-2">||</span> Please wait .
      </h1>
    </div>
  );
}
