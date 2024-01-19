import React from "react";
import { StickyNavbar } from "../Components/NavBar";
import { Input } from "@material-tailwind/react";

function SendMail() {
  return (
    <>
      <StickyNavbar />
      <div className="container w-100 mx-auto grid grid-cols-2 mt-10">
        <div className="mx-10 grid grid-rows-4 gap-5">
          <Input label="Email" className="w-full" />
          <Input label="Copany Name" className="w-full" />
          <Input label="Phone" className="w-full" />
          <Input label="Location" className="w-full" />
        </div>
        <div>2</div>
      </div>
    </>
  );
}

export default SendMail;
