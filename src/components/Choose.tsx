import React from "react";
import Image from "next/image";
function Choose() {
  return (
    <div className="grid grid-cols-3 items-start justify-center mb-10">
      <div className="col-span-2">
        <Image
          src="/car2.png"
          width={1000}
          height={1000}
          alt="bigcar"
          className="w-[80%] h-full object-contain"
        />
      </div>
      <div className="col-span-1 pr-20 space-y-8 ">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold ">Why choose Us</h1>
          <h1 className="font-light text-[#4A4A4A]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </h1>
        </div>
        <div className="space-y-7">
          <div className="flex gap-6">
            <Image
              src="/contact.png"
              width={1000}
              height={1000}
              alt="bigcar"
              className="w-10 h-10"
            />

            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">Customer Support</h1>
              <h1 className="text-[#4A4A4A] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </h1>
            </div>
          </div>
          <div className="flex gap-6">
            <Image
              src="/best.png"
              width={1000}
              height={1000}
              alt="bigcar"
              className="w-8 h-8"
            />

            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">Best Price</h1>
              <h1 className="text-[#4A4A4A] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </h1>
            </div>
          </div>{" "}
          <div className="flex gap-6">
            <Image
              src="/location.png"
              width={1000}
              height={1000}
              alt="bigcar"
              className="w-10 h-10"
            />

            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">Location </h1>
              <h1 className="text-[#4A4A4A] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </h1>
            </div>
          </div>{" "}
          <div className="flex gap-6">
            <Image
              src="/card.png"
              width={1000}
              height={1000}
              alt="bigcar"
              className="w-10 h-10"
            />

            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">Experience Drivers</h1>
              <h1 className="text-[#4A4A4A] font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
