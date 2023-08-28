import React from "react";
import Image from "next/image";
import netflixIcon from "./../../../../assets/images/homePage/Netflix_icon.svg";
import imageTV from "./../../../../assets/images/homePage/tv.png";
import imageMobile from "./../../../../assets/images/homePage/mobile.jpg";
import imageDesktop from "./../../../../assets/images/homePage/desktop.png";
import imageKids from "./../../../../assets/images/homePage/kids.png";
import { useRouter } from "next/router";

const HomePageEnglish = () => {
  const { push } = useRouter();

  const handlerSignIn = () => {
    push("/layouts/auth/login");
  };

  return (
    <>
      <div className="bg-my-homepage min-h-screen bg-cover bg-center">
        <div className="absolute z-10 inset-0 bg-black opacity-75  ">
          <div className="relative z-20">
            <div className="hidden lg:flex max-w-full max-h-full justify-between text-slate-500 font-medium items-center pb-10 mx-28 mt-0">
              <Image src={netflixIcon} alt="" className="w-40 h-40" />

              <div className="flex space-x-2 mr-2 items-center">
                <select className="select select-bordered w-full max-w-xs">
                  <option>Bahasa Indonesia</option>
                  <option selected>English</option>
                </select>
                <button className="btn bg-red-600 hover:bg-red-700 text-white" onClick={handlerSignIn}>
                  Sign In
                </button>
              </div>
            </div>

            <div className="flex-col justify-center items-center text-center text-white mt-20">
              <h1 className="text-5xl font-bold pb-5">Unlimited movies, TV shows, and more</h1>
              <h2 className="text-3xl font-medium pb-5">Watch anywhere. Cancel anytime.</h2>
              <p className="text-2xl pb-5">Ready to watch? Enter your email to create or restart your membership.</p>

              <div className="">
                <input type="email" placeholder="Email address" className="input input-bordered input-lg w-full max-w-xs mr-2 text-white bg-gray-600 bg-transparent focus:outline-none focus:ring focus:border-slate-200" />
                <button className="btn btn-lg bg-red-600 hover:bg-red-700 text-white">Get Started </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] pt-2">
        <div className="bg-black pt-16 text-white">
          <div className="flex justify-center items-center text-center">
            <div className="text-left mx-24">
              <h1 className="text-5xl font-bold pb-5">Enjoy on your TV</h1>
              <p className="text-2xl font-medium">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <Image src={imageTV} alt="" className="" />
          </div>
        </div>
      </div>

      <div className="bg-[#141414] pt-2">
        <div className="bg-black pt-16 text-white">
          <div className="flex justify-center items-center text-center">
            <Image src={imageMobile} alt="" className="" />
            <div className="text-left mx-24">
              <h1 className="text-5xl font-bold pb-5">Download your shows to watch offline</h1>
              <p className="text-2xl font-medium">Save your favorites easily and always have something to watch.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] pt-2">
        <div className="bg-black pt-16 text-white">
          <div className="flex justify-center items-center text-center">
            <div className="text-left mx-24">
              <h1 className="text-5xl font-bold pb-5">Watch everywhere</h1>
              <p className="text-2xl font-medium">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <Image src={imageDesktop} alt="" className="" />
          </div>
        </div>
      </div>

      <div className="bg-[#141414] pt-2">
        <div className="bg-black pt-16 text-white">
          <div className="flex justify-center items-center text-center">
            <Image src={imageKids} alt="" className="" />
            <div className="text-left mx-24">
              <h1 className="text-5xl font-bold pb-5">Create profiles for kids</h1>
              <p className="text-2xl font-medium">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] pt-2">
        <div className="bg-black pt-16 text-white">
          <div className="flex-col justify-center items-center text-center mx-24">
            <h1 className="text-5xl font-bold pb-5">Frequently Asked Questions</h1>

            <div className="collapse collapse-plus bg-[#141414] mb-5 text-left">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">What is Netflix?</div>
              <div className="collapse-content">
                <p className="pb-2">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There1s always something new to discover and new TV shows and movies are added every week!</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-[#141414] mb-5 text-left">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">How much does Netflix cost?</div>
              <div className="collapse-content">
                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54,000 to IDR186,000 a month. No extra costs, no contracts.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-[#141414] mb-5 text-left">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Where can I watch?</div>
              <div className="collapse-content">
                <p className="pb-2">
                  Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs,
                  smartphones, tablets, streaming media players and game consoles.
                </p>
                <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you1re on the go and without an internet connection. Take Netflix with you anywhere.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-[#141414] mb-5 text-left">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">How do I cancel?</div>
              <div className="collapse-content">
                <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-[#141414] mb-5 text-left">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">What can I watch on Netflix?</div>
              <div className="collapse-content">
                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-[#141414] mb-5 text-left">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Is Netflix good for kids?</div>
              <div className="collapse-content">
                <p className="pb-2">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
              </div>
            </div>

            <p className="text-2xl py-5">Ready to watch? Enter your email to create or restart your membership.</p>

            <div className="pb-5">
              <input type="email" placeholder="Email address" className="input input-bordered input-lg w-full max-w-xs mr-2 text-white bg-gray-600 bg-transparent focus:outline-none focus:ring focus:border-slate-200" />
              <button className="btn btn-lg bg-red-600 hover:bg-red-700 text-white">Get Started </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] pt-2">
        <div className="bg-black pt-16 text-white ">
          <div className="text-left border border-white mx-24">
            <p>Questions? Call 007-803-321-2130</p>
            <footer className="footer p-10 text-neutral-content">
              <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
              </div>
              <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
              </div>
              <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </div>
            </footer>

            <div className="mb-8">
              <select className="select select-bordered w-full max-w-xs bg-gray-900 text-white">
                <option>Bahasa Indonesia</option>
                <option selected>English</option>
              </select>

              <p className="pt-5">Netflix Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageEnglish;
