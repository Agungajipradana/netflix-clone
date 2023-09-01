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
      <div className="bg-black min-h-screen w-full bg-no-repeat bg-cover mx-auto bg-center md:bg-my-homepage md:w-[1349px] md:h-[1150px]">
        <div className="absolute z-10 inset-0 font-bebas-neue md:bg-[#00000066] md:w-[1349px] md:h-[1150px] ">
          <div className="relative z-20">
            <div className="flex max-w-full max-h-full justify-between text-slate-500 font-medium items-center  mx-4 mt-6 md:pb-10 md:mx-10">
              <Image src={netflixIcon} alt="" className="w-[74px] h-[20px] md:w-[166px] md:h-[45px]" />
            </div>

            <div className="bg-black min-h-screen md:bg-transparent">
              <div className="flex  md:justify-center md:items-center md:mb-20">
                <div className="relative z-0 flex mx-6 text-white  w-[740px] h-[400px] md:w-[450px] md:h-[660px] md:bg-black md:opacity-80">
                  <div className="absolute z-10 flex flex-col justify-center items-center text-left text-white mt-5  md:justify-center md:items-center md:mx-14 md:mt-16">
                    <div className="md:w-[340px] md:h-[460px]">
                      <h2 className="text-3xl font-semibold pb-5 md:text-4xl">Sign In</h2>
                      <input type="email" placeholder="Email or phone number" className="input input-bordered input-lg text-white mb-5 bg-[#333333] w-full text-sm md:text-base md:w-[314px] md:h-[50px]" />
                      <input type="password" placeholder="Password" className="input input-bordered input-lg mr-2 text-white bg-[#333333] mb-8 w-full text-sm md:text-base md:w-[314px] md:h-[50px]" />
                      <button className="btn w-full border-none rounded bg-[#E50914] hover:bg-red-700 text-white md:w-[314px] md:h-[50px]" onClick={handlerSignIn}>
                        Sign In{" "}
                      </button>
                      <div className="form-control flex justify-between text-[#B3B3B3]">
                        <label className="label cursor-pointer">
                          <div className="flex gap-2">
                            <input type="checkbox" className="checkbox bg-white w-5 h-5 rounded-none" />
                            <span className="label-text text-[#B3B3B3]">Remember me</span>
                          </div>
                          <Link href="" className="text-sm  hover:border-b md:mr-6">
                            Need Help?
                          </Link>
                        </label>
                      </div>

                      <h4 className="mt-10 mb-2 text-[#B3B3B3] md:mt-20 md:mb-5">
                        New to Netflix?{" "}
                        <Link href={"/"} className="hover:border-b text-white">
                          Sign up now
                        </Link>
                      </h4>

                      <p className="text-[#B3B3B3] text-sm md:text-base">
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

            <div className="bg-[#141414]  pt-1 font-bebas-neue md:bg-[#00000066] md:pt-0">
              <div className="bg-black pt-5 text-[#B3B3B3] md:bg-[#00000066] md:h-[300px] md:pt-16">
                <div className="text-left md:mx-28">
                  <div className="flex flex-row  text-center space-x-1 mx-10">
                    <p>Questions? Call </p>
                    <a className="link link-hover">007-803-321-2130</a>
                  </div>

                  <footer className="hidden md:footer md:p-10 md:text-[#B3B3B3]">
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

                  <footer className="footer p-10 text-[#B3B3B3] flex space-x-10 md:hidden">
                    <div>
                      <a className="link link-hover">FAQ</a>
                      <a className="link link-hover">Terms of Use</a>
                      <a className="link link-hover">Cookie Preferences</a>
                    </div>
                    <div>
                      <a className="link link-hover">Help Center</a>
                      <a className="link link-hover">Privacy</a>
                      <a className="link link-hover">Corporate Information</a>
                    </div>
                  </footer>

                  <div className="mb-8 pb-8 mx-10">
                    <select className="select select-bordered w-[180px] rounded h-[32px] bg-black text-[#B3B3B3]" defaultValue="English">
                      <option>Bahasa Indonesia</option>
                      <option>English</option>
                    </select>
                  </div>
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
