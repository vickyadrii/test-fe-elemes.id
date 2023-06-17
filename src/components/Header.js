import Image from "next/image";

import foodHeader from "../../public/images/food-header.png";
import bgFood from "../../public/images/bg-food.png";
import stars from "../../public/images/stars.svg";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[80vh] p-5">
      <div className="max-w-md flex flex-col gap-6">
        <h2 className="font-medium text-[64px] text-primary leading-[70px]">
          Good Food Us Good Mood
        </h2>
        <p className="text-secondary max-w-[530px] md:text-lg">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
        <div className="flex gap-8 items-center">
          <button className="text-white text-sm shadow-2xl shadow-[#666BE2]/35 bg-primary px-5 py-3 rounded-full font-medium outline-none hover:bg-[#84a538] transition-all duration-100 active:ring active:ring-lime-200">
            Daftar Sekarang
          </button>
          <button className="text-sm bg-light-gray text-dark px-5 py-3 rounded-full font-medium outline-none hover:bg-gray-100 transition-all duration-100 active:ring active:ring-slate-200">
            About us
          </button>
        </div>
      </div>
      <div className="relative flex justify-center w-[550px] h-[550px] shrink-0">
        <Image
          src={bgFood}
          alt="bg header"
          className="absolute top-0 w-full h-full"
        />
        <Image
          src={foodHeader}
          alt="food header"
          className="object-cover w-full p-10"
        />
        <div
          className={`${openSans.className} flex bg-white/75 rounded-[17px] drop-shadow-md pl-5 pr-16 py-3 gap-5 absolute bottom-0 left-0 z-50`}
        >
          <Image src={foodHeader} alt="food header" className="w-20" />
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Green Salad Tomato</h3>
            <p className="text-secondary text-xs">Tomato</p>
            <div>
              <Image
                src={stars}
                alt="food header"
                className=" left-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
