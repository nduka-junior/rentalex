import React from "react";
import Image from "next/image";
function Works() {
  return (
    <div className=" flex justify-center items-center flex-col mt-36">
      <div className="text-center">
        <h1 className="font-light">HOW IT WORKS</h1>
        <h1 className="font-semibold text-5xl mt-3">
          RentalEx following 3 working Steps
        </h1>
      </div>

      <div className="my-16 flex justify-between gap-9">
        <div className="flex items-center justify-center flex-col gap-6">
          <div className="rounded-xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] inline-flex items-center justify-center">
            <div className="inline-block py-5 px-6 bg-[#F5F6FF] rounded-xl ">
              <Image
                src="/location2.png"
                width={1000}
                height={1000}
                alt="location"
                className="w-16 h-16"
              />
            </div>
          </div>
          <h1 className="text-2xl font-medium ">Choose a Location</h1>
          <h1 className="font-extralight w-[70%] text-center ">
            See 3 popular hotels at a heavily discount price
          </h1>
        </div>

        <div className="flex items-center justify-center flex-col gap-6">
          <div className="rounded-xl p-2  inline-flex items-center justify-center">
            <div className="inline-block shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-5 px-6 bg-black rounded-xl ">
              <Image
                src="/date.png"
                width={1000}
                height={1000}
                alt="location"
                className="w-16 h-16"
              />
            </div>
          </div>
          <h1 className="text-2xl font-medium ">Pick-up Date</h1>
          <h1 className="font-extralight w-[70%] text-center ">
            Click choose and we{"'"}ll pick one of the 3 hotels.
          </h1>
        </div>

        <div className="flex items-center justify-center flex-col gap-6">
          <div className="rounded-xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] inline-flex items-center justify-center">
            <div className="inline-block py-5 px-6 bg-[#F5F6FF] rounded-xl ">
              <Image
                src="/book.png"
                width={1000}
                height={1000}
                alt="location"
                className="w-16 h-16"
              />
            </div>
          </div>
          <h1 className="text-2xl font-medium ">Book your car</h1>
          <h1 className="font-extralight w-[70%] text-center ">
            See which hotel right after you book!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Works;
