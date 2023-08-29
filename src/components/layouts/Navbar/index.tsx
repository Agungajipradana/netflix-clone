import Image from "next/image";
import netflixIcon from "../../../assets/images/homePage/Netflix_icon.svg";
import profileIcon from "../../../assets/images/userNamePage/Profile1.png";
import searchIcon from "../../../assets/images/navbar/search.svg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLink = [
  { label: "Account", path: "/layouts/userName" },
  { label: "Logout", path: "/layouts/auth/login" },
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
    <nav className={`bg-[#141414] mb-20 ${scrolled ? "bg-opacity-70" : "bg-[#141414]"}`}>
      <div className={`bg-[#141414] top-0 fixed w-full z-[9999] ${scrolled ? "bg-opacity-70" : "bg-[#141414]"}`}>
        <div className="hidden lg:flex max-w-full max-h-full justify-between text-slate-200 font-medium items-center mx-16 py-5">
          <div className="flex items-center text-center space-x-4">
            <Image src={netflixIcon} alt="" className="w-[87px] h-[25px]" />
            <p>My List</p>
            <p>Movies</p>
            <p>Tv Shows </p>
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
                  {navLink.map((item) => (
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
    </nav>
  );
};

export default Navbar;
