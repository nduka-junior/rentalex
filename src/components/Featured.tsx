import React from "react";
import Image from "next/image";

function Featured() {
  return (
    <div className="mt-16  flex justify-center items-center flex-col space-y-10">
      <div className="text-center flex items-center flex-col">
        <h1 className="font-semibold text-5xl">Featured Vehicles</h1>
        <h1 className="font-extralight w-[80%]  mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </h1>
      </div>
      <div className="text-xl font-light py-10">
        <ul className="flex gap-20 items-center justify-center">
          <li className="cursor-pointer">All</li>
          <li className="cursor-pointer">Sports</li>
          <li
            className="cursor-pointer font-semibold
          "
          >
            Rented
          </li>
          <li className="cursor-pointer">Luxury</li>
        </ul>
      </div>

      <div className="pb-20  flex justify-bewtween items-center gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide ">
        {/* ************* */}
        <div className="rounded-xl shadow-[2px_2px_20px_0px_#e8e8e868] snap-center min-w-[300px] hover:opacity-60 cursor-pointer  ">
          <div className="bg-[#FAFAFA] p-5">
            <div className="flex justify-between items-center ">
              <div>
                <h1 className=" text-2xl font-medium ">Mercedes Car</h1>
                <h1 className="text-[#A9A9A9] font-light ">Sport</h1>
              </div>
              <Image
                src="/fav.png"
                width={1000}
                height={1000}
                alt="fav icon"
                className=" w-12 h-12 cursor-pointer"
              />
            </div>
            <Image
              src="/car 1.png"
              width={1000}
              height={1000}
              alt="fav icon"
              className="w-[280px] h-[140px] object-contain my-2 "
            />
          </div>

          <div className="p-5 space-y-8">
            <div>
              <ul className="flex justify-between items-center ">
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/fuel.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>90L</span>
                </li>
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/settings.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>Manual</span>
                </li>
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/group.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>6 People</span>
                </li>
              </ul>
            </div>

            <div className=" flex items-center justify-between ">
              <h1>
                <span className="font-semibold text-xl">$99.00/ </span>
                <span className="text-[#8E8E8E] text-sm"> per day</span>
              </h1>
              <button className=" py-3 px-6 bg-black hover:bg-[#000000d2] rounded-xl text-white">
                Rent Now
              </button>
            </div>
          </div>
        </div>
        {/* ************* */}
        <div className="rounded-xl shadow-[7px_4px_20px_3px_#e8e8e868] snap-center min-w-[300px] hover:opacity-60 cursor-pointer">
          <div className="bg-[#FAFAFA] p-5">
            <div className="flex justify-between items-center ">
              <div>
                <h1 className=" text-2xl font-medium ">Mercedes Car</h1>
                <h1 className="text-[#A9A9A9] font-light ">Sport</h1>
              </div>
              <Image
                src="/fav.png"
                width={1000}
                height={1000}
                alt="fav icon"
                className=" w-12 h-12 cursor-pointer"
              />
            </div>
            <Image
              src="/car 2.png"
              width={1000}
              height={1000}
              alt="fav icon"
              className="w-[280px] h-[140px] object-contain my-2 "
            />
          </div>

          <div className="p-5 space-y-8">
            <div>
              <ul className="flex justify-between items-center ">
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/fuel.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>90L</span>
                </li>
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/settings.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>Manual</span>
                </li>
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/group.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>6 People</span>
                </li>
              </ul>
            </div>

            <div className=" flex items-center justify-between ">
              <h1>
                <span className="font-semibold text-xl">$99.00/ </span>
                <span className="text-[#8E8E8E] text-sm"> per day</span>
              </h1>
              <button className=" py-3 px-6 bg-black hover:bg-[#000000d2] rounded-xl text-white">
                Rent Now
              </button>
            </div>
          </div>
        </div>{" "}
        {/* ************* */}
        <div className="rounded-xl shadow-[7px_4px_20px_3px_#e8e8e868] snap-center min-w-[300px] hover:opacity-60 cursor-pointer">
          <div className="bg-[#FAFAFA] p-5">
            <div className="flex justify-between items-center ">
              <div>
                <h1 className=" text-2xl font-medium ">Mercedes Car</h1>
                <h1 className="text-[#A9A9A9] font-light ">Sport</h1>
              </div>
              <Image
                src="/fav.png"
                width={1000}
                height={1000}
                alt="fav icon"
                className=" w-12 h-12 cursor-pointer"
              />
            </div>
            <Image
              src="/car 3.png"
              width={1000}
              height={1000}
              alt="fav icon"
              className="w-[280px] h-[140px] object-contain my-2 "
            />
          </div>

          <div className="p-5 space-y-8">
            <div>
              <ul className="flex justify-between items-center ">
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/fuel.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>90L</span>
                </li>
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/settings.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>Manual</span>
                </li>
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/group.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>6 People</span>
                </li>
              </ul>
            </div>

            <div className=" flex items-center justify-between ">
              <h1>
                <span className="font-semibold text-xl">$99.00/ </span>
                <span className="text-[#8E8E8E] text-sm"> per day</span>
              </h1>
              <button className=" py-3 px-6 bg-black hover:bg-[#000000d2] rounded-xl text-white">
                Rent Now
              </button>
            </div>
          </div>
        </div>{" "}
        {/* ************* */}
        <div className="rounded-xl shadow-[7px_4px_20px_3px_#e8e8e868] snap-center min-w-[300px] hover:opacity-60 cursor-pointer">
          <div className="bg-[#FAFAFA] p-5">
            <div className="flex justify-between items-center ">
              <div>
                <h1 className=" text-2xl font-medium ">Mercedes Car</h1>
                <h1 className="text-[#A9A9A9] font-light ">Sport</h1>
              </div>
              <Image
                src="/fav.png"
                width={1000}
                height={1000}
                alt="fav icon"
                className=" w-12 h-12 cursor-pointer"
              />
            </div>
            <Image
              src="/car 4.png"
              width={1000}
              height={1000}
              alt="fav icon"
              className="w-[280px] h-[140px] object-contain my-2 "
            />
          </div>

          <div className="p-5 space-y-8">
            <div>
              <ul className="flex justify-between items-center ">
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/fuel.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>90L</span>
                </li>
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/settings.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>Manual</span>
                </li>
                <li className="flex gap-2 font-medium text-[#8E8E8E] text-sm items-center ">
                  <Image
                    src="/group.png"
                    width={1000}
                    height={1000}
                    alt="fuel icon"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>6 People</span>
                </li>
              </ul>
            </div>

            <div className=" flex items-center justify-between ">
              <h1>
                <span className="font-semibold text-xl">$99.00/ </span>
                <span className="text-[#8E8E8E] text-sm"> per day</span>
              </h1>
              <button className=" py-3 px-6 bg-black hover:bg-[#000000d2] rounded-xl text-white">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
