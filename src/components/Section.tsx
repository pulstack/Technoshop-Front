import Image from "next/image";
import React from "react";
import Reklama1 from "../app/assets/images/Reklama1.png";
import Reklama2 from "../app/assets/images/Reklama2.png";
import Reklama3 from "../app/assets/images/Reklama3.png";
import Reklama4 from "../app/assets/images/Macbook1.png";

const Section = () => {
  return (
    <div className="grid grid-cols-4 mt-[56px]">
      <div>
        <Image src={Reklama1} alt="image" width={360} height={366} />
        <div className="w-[356px] h-[208px] px-[32px]">
          <p className="text-[33px]">Popular Products</p>
          <p className="text-[14px] text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="bg-[#F9F9F9]">
        <Image src={Reklama2} alt="image" width={360} height={366} />
        <div className="w-[356px] h-[208px] px-[32px]">
          <p className="text-[33px]">Popular Products</p>
          <p className="text-[14px] text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="bg-[#EAEAEA]">
        <Image src={Reklama3} alt="image" width={360} height={366} />
        <div className="w-[356px] h-[208px] px-[32px]">
          <p className="text-[33px]">Popular Products</p>
          <p className="text-[14px] text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="bg-[#2C2C2C]">
        <Image src={Reklama4} alt="image" width={360} height={366} />
        <div className="w-[296px] h-[208px] px-[32px]">
          <p className="text-[33px]">Popular Products</p>
          <p className="text-[14px] text-[#909090]">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
