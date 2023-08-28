import Image from "next/image";
import netflixIcon from "../../../assets/images/homePage/Netflix_icon.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();

  const handlerSignIn = () => {
    push("/layouts/userName");
  };

  return (
    <>
      <div className="bg-my-homepage max-w-full min-h-screen bg-cover bg-center ">
        <div className="hidden lg:flex max-w-full max-h-full justify-between text-slate-500 font-medium items-center pb-10 mx-28 mt-0">
          <Image src={netflixIcon} alt="" className="w-40 h-40" />
        </div>

        <div className="flex justify-center items-center mb-20">
          <div className="relative z-0 flex bg-black opacity-75 text-white box-border border-white w-[450px] h-[660px]">
            <div className="absolute z-10 flex-wrap justify-center items-center text-left text-white mt-20 mx-14">
              <div className=" w-[340px] h-[460px]">
                <h2 className="text-4xl font-semibold pb-5">Sign In</h2>
                <input type="email" placeholder="Email or phone number" className="input input-bordered input-lg w-full max-w-xs mr-2 text-white bg-gray-600 bg-transparent focus:outline-none focus:ring focus:border-slate-200 mb-2" />
                <input type="password" placeholder="Password" className="input input-bordered input-lg w-full max-w-xs mr-2 text-white bg-gray-600 bg-transparent focus:outline-none focus:ring focus:border-slate-200 mb-5" />
                <button className="btn w-full max-w-xs bg-red-600 hover:bg-red-700 text-white" onClick={handlerSignIn}>
                  Sign In{" "}
                </button>
                <div className="form-control mx-12">
                  <label className="label cursor-pointer">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text left-1">Remember me</span>
                    <Link href="" className="text-sm hover:border-b">
                      Need Help?
                    </Link>
                  </label>
                </div>

                <div>
                  <h4 className="mt-20 mb-5">
                    New to Netflix?{" "}
                    <Link href={"/"} className="hover:border-b">
                      Sign up now
                    </Link>
                  </h4>

                  <p>
                    This page is protected by Google reCAPTCHA to ensure you`re not a bot.{" "}
                    <Link href="" className="text-primary hover:border-b hover:border-primary">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black opacity-75 pt-16 text-white ">
          <div className="text-left border border-white mx-24">
            <p>Questions? Call 007-803-321-2130</p>
            <footer className="footer p-10 text-neutral-content">
              <div>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover">Cookie Preferences</a>
              </div>
              <div>
                <a className="link link-hover">Help Center</a>
                <a className="link link-hover">Corporate Information</a>
              </div>
              <div>
                <a className="link link-hover">Terms of Use</a>
              </div>
              <div>
                <a className="link link-hover">Privacy</a>
              </div>
            </footer>

            <div className="mb-8">
              <select className="select select-bordered w-full max-w-xs bg-gray-900 text-white">
                <option>Bahasa Indonesia</option>
                <option selected>English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
