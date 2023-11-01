import React from "react";

function index() {
  return (
    <>
      <div className=" inline-block  overflow-y-auto sm:block  bg-black text-white p-6 w-screen h-[400px]">
        <div className="flex  text-sm gap-20 w-screen h-[300px]  text-white p-6">
          <div className="text-start">
            <h1 className="font-semibold mb-6 text-gray-600">ABOUT</h1>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Flipkart Stories</a>
              </li>

              <li>
                <a href="">Press</a>
              </li>
              <li>
                <a href="">Flipkart Wholesale</a>
              </li>

              <li>
                <a href=" "> Cleartrip </a>
              </li>
              <li>
                <a href="">Corporate Information</a>
              </li>
            </ul>
          </div>
          <div className="text-start">
            <h1 className="font-semibold mb-6 text-gray-600">HELP</h1>
            <ul>
              <li>Payments </li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
              <li>Report Infringement</li>
            </ul>
          </div>
          <div className="text-start">
            <h1 className="font-semibold mb-6 text-gray-600">
              CONSUMER POLICY
            </h1>
            <ul>
              <li>Cancellation & Returns </li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>Wholesale</li>
              <li>EPR Compliance</li>
            </ul>
          </div>
          <div className="text-start">
            <h1 className="font-semibold mb-6 text-gray-600">SOCIAL</h1>
            <ul>
              <li>Facebook </li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div className="flex">
            <div className="w-[200px] relative h-full rotate-90  border-b-2 border-white flex"></div>
            <div className="text-start ">
              <h1 className="font-semibold mb-6 text-gray-600">Mail Us</h1>
              <p>
                Flipkart Internet Private Limited,
                <br />
                Buildings Alyssa,Begonia & <br /> Clove Embassy Tech Village,
                <br />
                Outer Ring Road,Devarabeesanahalli Village,
                <br />
                Bengaluru,560103,
                <br />
                Karnataka,India
              </p>
            </div>{" "}
          </div>

          <div className="text-start">
            <h1 className="font-semibold mb-6  text-gray-600">
              Registered Office Address:
            </h1>
            <p>
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa,Begonia & <br /> Clove Embassy Tech Village,
              <br />
              Outer Ring Road,Devarabeesanahalli Village,
              <br />
              Bengaluru,560103,
              <br />
              Karnataka,India
              <br />
              CIN : U51109KA2012PTC066107
              <br />
              Telephone:044-45614700
            </p>
          </div>

          {/* <div className="h-0 w-full border-b-2 border-white"></div>
          <div className="flex">
            <ul>
              <li>
                <a href="">Become a Seller</a>
              </li>{" "}
              <li>
                <a href="">Advertise</a>
              </li>
              <li>
                <a href="">Gift Cards</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">2007-2023 FlipKart.com</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default index;
