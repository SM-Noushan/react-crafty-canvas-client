import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaDribbble,
  FaPhone,
  FaRegEnvelope,
} from "react-icons/fa6";
const FooTer = () => {
  return (
    <footer className="bg-info-content/5">
      <div className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz py-20">
        <div className="flex flex-col items-center md:flex-row gap-y-8">
          <aside className="max-w-64 lg:max-w-sm md:mr-12 xl:mr-24">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p className="text-xl lg:text-3xl">Crafty Canvas</p>
            <p className="text-justify">
              Arts and crafts evolved from the fixed notions of fundamental
              ideas to the modern usage of available materials and truthful
              representation of the existing lifestyles around the place.
            </p>
          </aside>
          <div className="flex-1 grid grid-cols-2 gap-y-8 lg:grid-cols-4">
            {/* social links */}
            <nav>
              <h6 className="footer-title">Elsewhere</h6>
              <div className="*:flex *:items-center *:gap-1.5 space-y-1.5">
                <div className="link link-hover hover:text-blue-600">
                  <FaFacebook />
                  <a>Facebook</a>
                </div>
                <div className="link link-hover hover:text-blue-600">
                  <FaInstagram />
                  <a>Instagram</a>
                </div>
                <div className="link link-hover hover:text-blue-600">
                  <FaXTwitter />
                  <a>XTwitter</a>
                </div>
                <div className="link link-hover hover:text-blue-600">
                  <FaDribbble />
                  <a>Dribble</a>
                </div>
              </div>
            </nav>
            {/* address */}
            <nav>
              <h6 className="footer-title">Our address</h6>
              <div>
                <p>
                  625 @ Neo Blake Road, <br />
                  Artland, Craft 14536, BD
                </p>
                <div className="flex items-center gap-2 my-2">
                  <FaPhone />
                  <span>+880 17589-02584</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegEnvelope />
                  <span>example@email.com</span>
                </div>
              </div>
            </nav>
            <nav>
              <h6 className="footer-title">Support</h6>
              <a className="link link-hover hover:text-blue-600">
                Our Career
              </a>{" "}
              <br />
              <a className="link link-hover hover:text-blue-600">Chat</a> <br />
              <a className="link link-hover hover:text-blue-600">FAQ</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <div>
                <a className="link link-hover hover:text-blue-600">
                  Terms of use
                </a>{" "}
                <br />
                <a className="link link-hover hover:text-blue-600">
                  Privacy policy
                </a>{" "}
                <br />
                <a className="link link-hover hover:text-blue-600">
                  Cookie policy
                </a>{" "}
                <br />
              </div>
            </nav>
          </div>
        </div>
        <div className="mt-8 text-center">
          Copyright © 2024 - All right reserved by Crafty Canvas
        </div>
      </div>
    </footer>
  );
};

export default FooTer;
