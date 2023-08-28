import Image from "next/image";
import Link from "next/link";
import netflixIcon from "../../../assets/images/homePage/Netflix_icon.svg";
import profile1 from "../../../assets/images/userNamePage/Profile1.png";
import profile2 from "../../../assets/images/userNamePage/Profile2.png";
import profile3 from "../../../assets/images/userNamePage/Profile3.png";
import profile4 from "../../../assets/images/userNamePage/Profile4.png";
import addProfile from "../../../assets/images/userNamePage/addProfile.svg";
import lockProfile from "../../../assets/images/userNamePage/lockProfile.png";

const UserNamePage = () => {
  return (
    <>
      <div className="bg-black min-h-screen bg-cover bg-center ">
        <div className="hidden lg:flex max-w-full max-h-full justify-between text-slate-500 font-medium items-center pb-10 mx-28 mt-0">
          <Image src={netflixIcon} alt="" className="w-40 h-40" />
        </div>

        <div className="flex-col justify-center items-center text-center text-white ">
          <h1 className="text-5xl font-semibold pb-10">Who`s watching ?</h1>

          <div className="flex justify-center items-center gap-6 mb-10 text-gray-300">
            <div>
              <Link href={"/layouts/home"}>
                <Image src={profile1} alt="" className="w-40 h-40 mb-2 hover:outline outline-offset-2 outline-blue-500" />
              </Link>
              <h5>Profile 1</h5>
            </div>
            <div>
              <Link href={{}}>
                <Image src={profile2} alt="" className="w-40 h-40 mb-2 hover:outline outline-offset-2 outline-blue-500" />
              </Link>
              <h5>Profile 2</h5>
            </div>
            <div>
              <Link href={{}}>
                <Image src={profile3} alt="" className="w-40 h-40 mb-2 hover:outline outline-offset-2 outline-blue-500" />
              </Link>
              <h5>Profile 3</h5>
            </div>
            <div>
              <Link href={{}}>
                <Image src={profile4} alt="" className="w-40 h-40 mb-2 hover:outline outline-offset-2 outline-blue-500" />
              </Link>
              <h5 className="mb-2">Profile 4</h5>
            </div>
            <div>
              <Link href={{}}>
                <Image src={addProfile} alt="" className="w-20 h-20 mb-2" />
              </Link>
              <h5>Add Profile</h5>
            </div>
          </div>
          <button className="btn btn-outline hover:bg-[#141414]">Manage Profiles</button>
        </div>
      </div>
    </>
  );
};

export default UserNamePage;
