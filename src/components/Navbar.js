import Image from "next/image";
import logo from "../../public/icons/logo.png";
import { MenuList } from "@/utils/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-5 flex justify-between items-center sticky top-0 z-50">
      <Image src={logo} />
      <ul className="flex items-center gap-10 text-sm font-medium text-secondary">
        {MenuList.map(({ navigate, text, isHot }) => (
          <Link key={navigate} href={navigate}>
            <div className="relative p-5">
              {text}
              {isHot && (
                <div className="bg-[#E7462D] px-3 rounded-full text-white text-center absolute top-0 right-0">
                  <span className="text-[8px] font-bold">HOT</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </ul>
      <div className="flex gap-8 items-center">
        <button className="text-sm px-5 py-3 rounded-full font-medium outline-none active:ring active:ring-slate-100">
          Masuk
        </button>
        <button className="text-white text-sm bg-primary px-5 py-3 rounded-full font-medium outline-none hover:bg-[#84a538] transition-all duration-100 active:ring active:ring-lime-200">
          Daftar Sekarang
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
