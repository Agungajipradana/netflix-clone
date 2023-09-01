import Image from "next/image";
import Link from "next/link";
import netflixIcon from "../../../assets/images/homePage/Netflix_icon.svg";
import profile1 from "../../../assets/images/userNamePage/Profile1.png";
import profile2 from "../../../assets/images/userNamePage/Profile2.png";
import profile3 from "../../../assets/images/userNamePage/Profile3.png";
import profile4 from "../../../assets/images/userNamePage/Profile4.png";
import addProfile from "../../../assets/images/userNamePage/addProfile.svg";
import pencil from "../../../assets/images/userNamePage/pencil.svg";
import lockProfile from "../../../assets/images/userNamePage/lockProfile.png";

const UserNamePage = () => {
  return (
    <>
      <div className="bg-black min-h-screen bg-cover bg-center font-bebas-neue">
        <div className="flex justify-center items-center text-slate-500 font-medium  pb-1 mx-28  md:pb-10 md:justify-between">
          <Image src={netflixIcon} alt="" className="w-40 h-40 ml-10 md:ml-0" />

          <Image src={pencil} alt="" className="w-6 h-6 ml-10 md:hidden" />
        </div>

        <div className="flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-3xl font-semibold pb-10 md:text-4xl lg:text-5xl">Who`s watching ?</h1>

          <div className="grid grid-cols-2 gap-4 text-gray-300 md:flex md:justify-center md:items-center md:gap-6 md:mb-10 ">
            <div>
              <Link href={"/layouts/home"}>
                <Image src={profile1} alt="" className="w-32 h-32 mb-2 hover:outline outline-offset-2 outline-blue-500  md:w-36 md:h-36 lg:w-40 lg:h-40" />
              </Link>
              <h5>Profile 1</h5>
            </div>
            <div>
              <Link href={{}}>
                <Image src={profile2} alt="" className="w-32 h-32 mb-2 hover:outline outline-offset-2 outline-blue-500 md:w-36 md:h-36 lg:w-40 lg:h-40" />
              </Link>
              <h5>Profile 2</h5>
            </div>
            <div>
              <Link href={{}}>
                <Image src={profile3} alt="" className="w-32 h-32 mb-2 hover:outline outline-offset-2 outline-blue-500 md:w-36 md:h-36 lg:w-40 lg:h-40" />
              </Link>
              <h5>Profile 3</h5>
            </div>
            <div>
              <Link href={{}}>
                <Image src={profile4} alt="" className="w-32 h-32 mb-2 hover:outline outline-offset-2 outline-blue-500 md:w-36 md:h-36 lg:w-40 lg:h-40" />
              </Link>
              <h5 className="mb-2">Profile 4</h5>
            </div>
            <div>
              <Link href={{}}>
                <Image src={addProfile} alt="" className="w-14 h-14 mb-2 ml-8 md:ml-0 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              </Link>
              <h5>Add Profile</h5>
            </div>
          </div>
          <button className="hidden mb-8 md:btn md:btn-outline md:hover:bg-[#141414]">Manage Profiles</button>
        </div>
      </div>
    </>
  );
};

export default UserNamePage;
