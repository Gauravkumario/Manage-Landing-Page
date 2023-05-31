import React from "react";
import Logo from "../src/assets/images/logo.svg";
import IllustrationIntro from "../src/assets/images/illustration-intro.svg";
import avatarAnisha from "../src/assets/images/avatar-anisha.png";
import avatarAli from "../src/assets/images/avatar-ali.png";
import avatarRichard from "../src/assets/images/avatar-richard.png";
import Facebook from "../src/assets/images/icon-facebook.svg";
import Instagram from "../src/assets/images/icon-instagram.svg";
import Twitter from "../src/assets/images/icon-twitter.svg";
import Youtube from "../src/assets/images/icon-youtube.svg";
import Pinterest from "../src/assets/images/icon-pinterest.svg";

function App() {
  return (
    <div className="App">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={Logo} alt="web-logo" />
          </div>
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full basline hover:bg-brightRedLight md:block"
          >
            Get Started
          </a>
          {/* {hamburgur-icon} */}
          <button
            id="menu-btn"
            className=" block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* {mobile-menu} */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center self-end hidden py-8 my-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
      <section id="hero">
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring Everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full basline hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={IllustrationIntro} alt="intro" />
          </div>
        </div>
      </section>
      {/* {Feature Section} */}
      <section id="features">
        {/* {flex container} */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* {whats difference} */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          {/* {number list} */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* {list item 1} */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-start space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <div>
                    <h3 className="text-base font-bold md:mb-4 md:">
                      Track company-wide progress
                    </h3>
                    <p className="text-darkGrayishBlue">
                      See how your day-to-day tasks fit into the wider vision.
                      Go from tracking progress at the milestone level all the
                      way done to the smallest of details. Never lose sight of
                      the bigger picture again.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <div>
                    <h3 className="text-base font-bold md:mb-4 md:">
                      Track company-wide progress
                    </h3>
                    <p className="text-darkGrayishBlue">
                      See how your day-to-day tasks fit into the wider vision.
                      Go from tracking progress at the milestone level all the
                      way done to the smallest of details. Never lose sight of
                      the bigger picture again.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <div>
                    <h3 className="text-base font-bold md:mb-4 md:">
                      Track company-wide progress
                    </h3>
                    <p className="text-darkGrayishBlue">
                      See how your day-to-day tasks fit into the wider vision.
                      Go from tracking progress at the milestone level all the
                      way done to the smallest of details. Never lose sight of
                      the bigger picture again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {testimonial section} */}
      <section id="testimonial">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">What they've said</h2>
          {/* {textimonial container} */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* {testmonial 1} */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={avatarAnisha} alt="test1" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team's workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            {/* {testmonial 2} */}
            <div className="flex flex-col  items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={avatarAli} alt="test1" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            {/* {testmonial 3} */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={avatarRichard} alt="test1" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can't stop recommending them to
                everyone I talk to!”
              </p>
            </div>
          </div>
          <div className="my-16">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full basline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* {cta section} */}
      <section id="cts" className="bg-brightRed">
        {/* {flex container} */}
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:flex-row md:space-y-0">
          {/* {heading} */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:mx-w-xl md:text-left">
            Simplify how your team works today
          </h2>
          {/* {button} */}
          <div>
            <a
              href="#"
              className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl basline hover:bg-gray-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-veryDarkBlue">
        {/* {flex container} */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2023, All Rights Reserved
            </div>
            {/* {logo} */}
            <div>
              <img src={Logo} className="h-8" alt="loko" />
            </div>
            {/* {social media container} */}
            <div className="flex justify-center space-x-4">
              {/* {link 1} */}
              <a href=".">
                <img src={Facebook} alt="facebook" className="h-8" />
              </a>
              {/* {link 2} */}
              <a href="">
                <img src={Youtube} alt="youtube" className="h-8" />
              </a>
              {/* {link 3} */}
              <a href="">
                <img src={Twitter} alt="twitter" className="h-8" />
              </a>
              {/* {link 4} */}
              <a href="">
                <img src={Pinterest} alt="pinterest" className="h-8" />
              </a>
              {/* {link 5} */}
              <a href="">
                <img src={Instagram} alt="instagram" className="h-8" />
              </a>
            </div>
          </div>
          {/* {list container} */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="" className="hover:text-brightRed">
                Home
              </a>
              <a href="" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="" className="hover:text-brightRed">
                Products
              </a>
              <a href="" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="" className="hover:text-brightRed">
                Careers
              </a>
              <a href="" className="hover:text-brightRed">
                Community
              </a>
              <a href="" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>
          {/* {imput container} */}
          <div className="flex flex-col justify-between">
            <form action="post">
              <div className="flex space-x-3">
                <input
                  type="email"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2023, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      <script src="js/script.js">
        {/* {      const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});} */}
      </script>
    </div>
  );
}

export default App;
