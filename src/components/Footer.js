import Image from "next/image";
import logo from "../../public/icons/logo.png";
import email from "../../public/icons/email-green.svg";
import phone from "../../public/icons/phone-green.svg";
import { category, leftFooter } from "@/utils/data";

const Footer = () => {
  return (
    <>
      <div className="m-10 p-10 bg-[#F9FFF6] flex justify-between rounded-xl">
        <div className="flex flex-col gap-6">
          <Image src={logo} alt="logo" />
          <p className="text-sm text-secondary">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, <br />{" "}
            Kecamatan Setiabudi, Kota Jakarta Selatan, <br /> Daerah Khusus
            Ibukota Jakarta 12950
          </p>
          <div className="flex items-center gap-5">
            {leftFooter.map(({ icons_url }) => (
              <Image
                key={icons_url}
                src={icons_url}
                alt={icons_url}
                className="hover:fill-black"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-32">
          <div className="flex flex-col gap-7">
            <h2 className="text-lg font-medium text-dark">Categories</h2>
            <ul className="flex flex-col gap-5">
              {category.map(({ name, id }) => (
                <li key={id} className="text-sm text-secondary">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="text-lg font-medium text-dark">About Us</h2>
            <ul className="flex flex-col gap-5 text-sm text-secondary">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Report Problem</li>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="text-lg font-medium text-dark">Newsletter</h2>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-secondary leading-7">
                Get now free 50% discount for all <br /> products on your first
                order
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  name=""
                  className="border-y border-l border-y-black rounded-tl-md rounded-bl-md border-l-black py-1.5 text-sm outline-none focus:border-none focus:ring-lime-200 focus:ring px-5"
                />
                <span className="bg-primary font-medium text-sm py-[7px] text-white px-5 rounded-tr-md rounded-br-md cursor-pointer hover:bg-[#84a538]">
                  SEND
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Image src={email} alt="email" />
                <span className="text-sm">elemesid@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={phone} alt="phone" />
                <span className="text-sm">0888 1111 2222 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-10 pb-10 items-center">
        <span className="text-xs text-secondary">© 2021 ELEMES ID. ALL RIGHTS RESERVED</span>
      </div>
    </>
  );
};

export default Footer;
