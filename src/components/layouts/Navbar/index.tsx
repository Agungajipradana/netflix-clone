import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import netflixIcon from "../../../assets/images/homePage/Netflix_icon.svg";
import profileIcon from "../../../assets/images/userNamePage/Profile1.png";
import searchIcon from "../../../assets/images/navbar/search.svg";
import homeIcon from "../../../assets/images/navbar/home.svg";
import comingSoonIcon from "../../../assets/images/navbar/comingSoon.svg";
import downloadIcon from "../../../assets/images/navbar/download.svg";
import moreIcon from "../../../assets/images/navbar/more.svg";

const profileLink = [
  { label: "Account", path: "/layouts/userName" },
  { label: "Logout", path: "/layouts/auth/login" },
];

const navLink = [
  { label: "My List", path: "/list" },
  { label: "Movies", path: "/movies" },
  { label: "Tv Shows", path: "/tvShow" },
];

const Navbar = () => {
  const [search, setSearch] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handlerSearch = () => {
    setSearch(true);
  };

  const handlerShowModal = () => {
    setShowModal(!showModal);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav>
      {/* Desktop */}
      <div className={`bg-[#141414]  font-bebas-neue md:mb-20 ${scrolled ? "bg-opacity-70" : "bg-[#141414]"}`}>
        <div className={`bg-[#141414] top-0 fixed w-full z-[9999] ${scrolled ? "bg-opacity-70" : "bg-[#141414]"}`}>
          <div className="hidden md:flex max-w-full max-h-full justify-between text-slate-200 font-medium items-center mx-16 py-5">
            <div className="flex items-center text-center space-x-4">
              <Link href={"/layouts/home"}>
                <Image src={netflixIcon} alt="" className="w-[87px] h-[25px]" />
              </Link>
              {navLink.map((item) => (
                <ul key={item.path}>
                  <li>
                    <Link href={item.path}>{item.label}</Link>
                  </li>
                </ul>
              ))}
            </div>

            <div className="flex space-x-2 mr-2 items-center">
              <button onClick={handlerSearch}>
                <Image src={searchIcon} alt="" className={`w-8 h-8 ${search && "hidden"}`} />
              </button>
              {search && (
                <div>
                  <input type="text" placeholder="Title, people, genres" className="input input-bordered input-sm w-full max-w-xs text-[#141414]" />
                </div>
              )}
              <button className="" onClick={handlerShowModal}>
                <Image src={profileIcon} alt="" className="w-14 h-10 border rounded-lg" />
              </button>
              {showModal && (
                <div className="absolute mt-36" ref={modalRef}>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#141414] opacity-75 rounded-box w-28">
                    {profileLink.map((item) => (
                      <li key={item.path}>
                        <Link href={item.path} className="hover:bg-slate-200 hover:text-[#141414] transition duration-300 ease-out hover:ease-in">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-black text-slate-200 w-full flex justify-center bottom-0 fixed py-3 md:hidden">
        {/* <div className="flex max-w-full max-h-full justify-between text-slate-200 font-medium items-center mx-16 py-5"> */}
        <div className="bg-black w-full flex justify-between items-center text-center space-x-6 mx-6 text-xs">
          {/* <div className="flex flex-col justify-center items-center text-center"> */}
          <Link href={"/layouts/home"}>
            <Image src={homeIcon} alt="" className="w-6 h-6 ml-1 sm:w-8 sm:h-8" />
            <p>Home</p>
          </Link>
          {/* </div> */}
          <Link href={{}}>
            <Image src={searchIcon} alt="" className="w-6 h-6 ml-1 sm:w-8 sm:h-8" />
            <p>Search</p>
          </Link>
          <Link href={{}}>
            <Image src={comingSoonIcon} alt="" className="w-6 h-6 ml-6 sm:w-8 sm:h-8" />
            <p>Coming Soon</p>
          </Link>
          <Link href={{}}>
            <Image src={downloadIcon} alt="" className="w-6 h-6 ml-3 sm:w-8 sm:h-8" />
            <p>Download</p>
          </Link>
          <Link href={{}}>
            <Image src={moreIcon} alt="" className="w-6 h-6 ml-1 sm:w-8 sm:h-8" />
            <p>More</p>
          </Link>
        </div>

        {/* <div className="flex space-x-2 mr-2 items-center">
            <button onClick={handlerSearch}>
              <Image src={searchIcon} alt="" className={`w-8 h-8 ${search && "hidden"}`} />
            </button>
            {search && (
              <div>
                <input type="text" placeholder="Title, people, genres" className="input input-bordered input-sm w-full max-w-xs text-[#141414]" />
              </div>
            )}
            <button className="" onClick={handlerShowModal}>
              <Image src={profileIcon} alt="" className="w-14 h-10 border rounded-lg" />
            </button>
            {showModal && (
              <div className="absolute mt-36" ref={modalRef}>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#141414] opacity-75 rounded-box w-28">
                  {profileLink.map((item) => (
                    <li key={item.path}>
                      <Link href={item.path} className="hover:bg-slate-200 hover:text-[#141414] transition duration-300 ease-out hover:ease-in">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div> */}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
