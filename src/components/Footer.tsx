import React from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
import Twitter from "@/assets/icons/Twitter.svg";
import Facebook from "@/assets/icons/Facebook.svg";
import TikTok from "@/assets/icons/Tiktok.svg";
import Instagram from "@/assets/icons/Instagram.svg";
const Footer = () => {
  return (
    <div className="w-full h-[410px] bg-[#211C24] text-white">
      <div className="flex justify-between items-center  pt-[104px] px-[160px]">
        <div>
          <Image
            src={Logo}
            alt="logo"
            width={65}
            height={22}
            className="max-w-[65px] w-full h-[22px]"
          />

          <p className="text-[14px] mt-[24px] mr-[113px]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        <div className="flex items-center justify-between gap-10 max-w-[632px] w-full pt-[104px]">
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-semibold  text-[16px]">Services</li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Bonus program
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Gift cards
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Credit and payment
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Service contracts
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:semibold">
                Non-cash account
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Payment
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-[16px]">
                Assistance to the buyer
              </li>
              <li className="font-normal hover:text-white text-[14px] hover:font-semibold text-[#CFCFCF]">
                Find an order
              </li>
              <li className="font-normal hover:text-white text-[14px] hover:font-semibold text-[#CFCFCF]">
                Terms of delivery
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Exchange and return of goods
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:font-semibold">
                Guarantee
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:text-[15px]">
                Frequently asked questions
              </li>
              <li className="font-normal hover:text-white text-[14px] text-[#CFCFCF] hover:text-[15px]">
                Terms of use of the site
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex py-20 gap-4 px-[160px] bg-[#211C24]">
        <Image
          src={Twitter}
          alt="logo"
          width={24}
          height={24}
          className="max-w-[24px] w-full h-[24px]"
        />
        <Image
          src={Facebook}
          alt="logo"
          width={24}
          height={24}
          className="max-w-[24px] w-full h-[24px]"
        />
        <Image
          src={TikTok}
          alt="logo"
          width={24}
          height={24}
          className="max-w-[24px] w-full h-[24px]"
        />
        <Image
          src={Instagram}
          alt="logo"
          width={24}
          height={24}
          className="max-w-[24px] w-full h-[24px]"
        />
      </div>
    </div>
  );
};

export default Footer;
