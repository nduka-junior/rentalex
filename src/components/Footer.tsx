import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div
      className="bg-black flex justify-between py-2 px-16  text-white items-center
    "
    >
      <h1 className="text-[34px] font-semibold">RentalEx</h1>

      <ul className="flex gap-[4vw]   justify-between items-center font-light">
        <li>Rent</li>
        <li>Share</li>
        <li>Ride</li>
        <li>Service</li>
      </ul>

      <div className="flex gap-4 items-center">
        <Image
          src="/insta.png"
          width={1000}
          height={1000}
          alt="insta"
          className="w-7 h-7"
        />{" "}
        <Image
          src="/face.png"
          width={1000}
          height={1000}
          alt="insta"
          className="w-7 h-7"
        />{" "}
        <Image
          src="/beha.png"
          width={1000}
          height={1000}
          alt="insta"
          className="w-7 h-7"
        />
      </div>
    </div>
  );
}

export default Footer;
