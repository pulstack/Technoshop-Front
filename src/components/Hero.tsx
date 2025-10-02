import React from "react";
import Image from "next/image";
import HeroImage from "../app/assets/images/IphoneImage.png";
import Playstation from "../app/assets/images/PlayStation.png";
import Macbook from "../app/assets/images/MacBookPro14.png";
import Noushnik from "../app/assets/images/noushnik.png";
import Vision from "../app/assets/images/vision.png";
const Hero = () => {
  return (
    <div className="">
      <div className="bg-[#211C24]  px-40  flex items-center mx-auto">
        <div className="flex flex-col text-white  max-w-[714px] w-full h-[128px]">
          <p className="font-semibold text-2xl text-start">Pro.Beyond.</p>

          <p className="font-inter text-[50px] whitespace-nowrap">
            IPhone 14 <span className="font-bold">Pro</span>
          </p>
          <p className="text-[18px] whitespace-nowrap">
            Created to change everything for the better. For everyone
          </p>

          <button className="w-[191px] h-[56px] rounded-[6px] mt-5 text-white border border-white py-3 px-5">
            Shop Now
          </button>
        </div>
        <Image src={HeroImage} alt="hero-image" width={406} height={632} />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-0">
        <div className="col-span-2 w-full h-full">
          <div className="flex items-center">
            <Image
              src={Playstation}
              alt="playstation"
              width={360}
              height={343}
            />
            <div className="flex flex-col w-[338px]">
              <p className="text-2xl md:text-[49px]">Playstation 5</p>
              <p className="text-[12px] md:text-[14px] text-[#909090]">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-1 row-start-2 bg-[#EDEDED] w-full h-full flex items-center">
          <div className="flex items-center gap-4 ">
            <Image src={Noushnik} alt="noushnik" width={104} height={272} />
            <div className="flex flex-col w-[160px] h-fit">
              <p className="text-4xl">Apple</p>
              <p className="text-4xl">AirPods</p>
              <p className="text-4xl font-bold">Max</p>
              <p className="text-[14px] text-[#909090] mt-2">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-2 row-start-2 bg-[#353535] w-full h-full flex items-center">
          <div className="flex items-center gap-4 text-white">
            <Image src={Vision} alt="vision" width={136} height={190} />
            <div className="flex flex-col w-[160px] h-fit">
              <p className="text-3xl">Apple</p>
              <p className="text-3xl">Vision Pro</p>
              <p className="text-[14px] text-[#909090] mt-2">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-1 bg-[#EDEDED] w-full h-full py-12">
          <div className="flex  items-center justify-end">
            <div className="flex flex-col w-[360px] h-fit pl-[56px] ">
              <p className="text-4xl">Macbook</p>
              <p className="text-4xl font-bold">Air</p>
              <p className="text-[14px] text-[#909090] mt-2">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
              <button className="w-[191px] h-[56px] rounded-[6px] mt-5 text-black border hover:bg-black hover:text-white hover:duration-1000  border-black py-3 px-5">
                Shop Now
              </button>
            </div>
            <Image src={Macbook} alt="macbook" width={360} height={343} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
