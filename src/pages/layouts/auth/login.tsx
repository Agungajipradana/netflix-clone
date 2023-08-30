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
      <div className="bg-my-homepage w-[1349px] h-[1150px] bg-cover bg-center ">
        <div className="absolute z-10 inset-0 bg-[#00000066] w-[1349px] h-[1150px]  font-bebas-neue">
          <div className="relative z-20">
            <div className="hidden lg:flex max-w-full max-h-full justify-between text-slate-500 font-medium items-center pb-10 mx-10 mt-6">
              <Image src={netflixIcon} alt="" className="w-[166px] h-[45px]" />
            </div>

            <div className="flex justify-center items-center mb-20">
              <div className="relative z-0 flex bg-black opacity-80 text-white box-border border-white w-[450px] h-[660px]">
                <div className="absolute z-10 flex-wrap justify-center items-center text-left text-white mt-16 mx-14">
                  <div className=" w-[340px] h-[460px]">
                    <h2 className="text-4xl font-semibold pb-5">Sign In</h2>
                    <input type="email" placeholder="Email or phone number" className="input input-bordered input-lg w-[314px] h-[50px] mr-2 text-white bg-[#333333] mb-5" />
                    <input type="password" placeholder="Password" className="input input-bordered input-lg w-[314px] h-[50px] mr-2 text-white bg-[#333333] mb-8" />
                    <button className="btn  w-[314px] h-[50px] border-none rounded bg-[#E50914] hover:bg-red-700 text-white" onClick={handlerSignIn}>
                      Sign In{" "}
                    </button>
                    <div className="form-control mx-12 text-[#B3B3B3]">
                      <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text  left-1">Remember me</span>
                        <Link href="" className="text-sm hover:border-b">
                          Need Help?
                        </Link>
                      </label>
                    </div>

                    <div>
                      <h4 className="mt-20 mb-5 text-[#B3B3B3]">
                        New to Netflix?{" "}
                        <Link href={"/"} className="hover:border-b text-white">
                          Sign up now
                        </Link>
                      </h4>

                      <p className="text-[#B3B3B3]">
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

            <div className="bg-[#00000066] h-[300px] pt-16 text-[#B3B3B3]">
              <div className="text-left mx-28">
                <div className="flex flex-row text-center space-x-1 mx-10">
                  <p>Questions? Call </p>
                  <a className="link link-hover">007-803-321-2130</a>
                </div>
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

                <div className="mb-8 mx-10">
                  <select className="select select-bordered w-[180px] rounded h-[32px] bg-black text-white">
                    <option>Bahasa Indonesia</option>
                    <option selected>English</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
