import Image from "next/image";
import React from "react";
import Reklama1 from "@/assets/images/Reklama1.png";
import Reklama2 from "@/assets/images/Reklama2.png";
import Reklama3 from "@/assets/images/Reklama3.png";
import Reklama4 from "@/assets/images/Macbook1.png";

const Section = () => {
  return (
    <div className="grid grid-cols-4 mt-[56px] items-stretch h-full">
      <div>
        <Image
          src={Reklama1}
          alt="image"
          width={360}
          height={366}
          className="h-[366px] object-contain w-full"
        />
        <div className=" px-[32px]">
          <p className="text-[30px]">Popular Products</p>
          <p className="text-[13px] text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="text-black border hover:bg-black hover:scale-110 duration-700 hover:text-white border-black mt-4 w-[191px] h-[56px] rounded-[6px] mb-[56px]">Shop Now</button>
        </div>
      </div>
      <div className="bg-[#F9F9F9]">
        <Image
          src={Reklama2}
          alt="image"
          width={360}
          height={366}
          className="h-[366px] object-contain w-full"
        />
        <div className=" px-[32px]">
          <p className="text-[30px]">Popular Products</p>
          <p className="text-[13px] text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="text-black border border-black hover:bg-black hover:scale-110 duration-700 hover:text-white mt-4 w-[191px] h-[56px] mb-[56px] rounded-[6px]">Shop Now</button>
        </div>
      </div>
      <div className="bg-[#EAEAEA]">
        <Image
          src={Reklama3}
          alt="image"
          width={360}
          height={366}
          className="h-[366px]  object-contain w-full"
        />
        <div className=" px-[32px]">
          <p className="text-[30px]">Popular Products</p>
          <p className="text-[13px] text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="text-black border border-black mt-4 w-[191px] h-[56px] hover:bg-black hover:scale-110 duration-700 hover:text-white rounded-[6px] mb-[56px]">Shop Now</button>
        </div>
      </div>
      <div className="bg-[#2C2C2C]">
        <Image
          src={Reklama4}
          alt="image"
          width={360}
          height={366}
          className="h-[366px] object-contain w-full"
        />
        <div className=" px-[32px] text-white">
          <p className="text-[30px]">Popular Products</p>
          <p className="text-[13px] text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="text-white border hover:bg-white hover:scale-110 duration-700 hover:text-black border-white mt-4 w-[191px] h-[56px] rounded-[6px] mb-[56px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
