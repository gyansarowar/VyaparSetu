
import React from "react";
import { Toaster } from "react-hot-toast";
import { useFirebase } from "../firebase/Firebase";
import ExportLogo from '../assets/andy-li-CpsTAUPoScw-unsplash.jpg'
import MinistryLogo from '../assets/Ministry_of_Commerce_and_Industry.svg.png'

const Home = () => {
  const { signInWithGoogle, isLoggedIn, Logout } = useFirebase();

  const handleLogin = (usertypeData) => {
    signInWithGoogle(usertypeData);
  };

  return (
    <>
      {/* Main Layout */}
      <div className="mx-auto pt-4 flex flex-col md:grid min-h-[calc(100vh-50px)] md:grid-rows-3 md:grid-cols-12 gap-4 md:gap-6">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 4000 }}
        />
        {/* Left Column - For Exporters */}
        <div className="col-span-12 md:col-span-3 row-span-2 bg-blue-700 flex flex-col justify-end">
          <div className="sm:text-[20px] md:text-[35px] lg:text-[50px] text-yellow-400 font-bold md:h-1/3 flex flex-col items-center justify-center">
            <div>For</div>
            <div>Exporters</div>
          </div>
          <div className="pt-4">
            <img
              src={ExportLogo}
              className="object-contain w-full h-auto border-black"
              alt="Export Logo"
            />
          </div>
        </div>

        {/* CheckBox */}
        <div className="col-span-12 md:col-span-5 row-span-2 text-blue-800 lg:font-bold p-4">
          <ul className="mt-4 lg:space-y-1">
            <li>
              <input type="checkbox" checked className="mr-2" /> Goods & Services Tax (GST) Rate
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> Drawback Rate
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> RoDTEP Rate
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> Interest Subvention Rate
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> Transport and Marketing Assistance (TMA) Rate
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> RoSCTL Rate
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> Export & Import Policy of India at Product Level
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> Global Trade & Tender Queries
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> Import Statistics of 116 Countries
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> Acts, Rules, Laws, Regulations
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> FAQs on Banking, FTA, Policy, etc.
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> Get reply on query within 24 Hours
            </li>
            <li>
              <input type="checkbox" checked className="mr-2" /> Free Subscription & Alerts
            </li>
          </ul>
        </div>

        {/* Right Column - Ministry logo and Advertisement */}
        <div className="col-span-12 md:col-span-4 border-black border-4 p-2 row-span-3 flex flex-col space-y-4">
          <div className="bg-white flex justify-center items-center">
            <img
              src={MinistryLogo}
              className="object-contain w-full h-auto border-2 p-4 border-black"
              alt="Ministry Logo"
            />
          </div>
          <div className="h-full border-2 text-2xl font-semibold border-black p-4 bg-blue-100 flex justify-center items-center">
            Advertisement Panel
          </div>
        </div>

        {/* Bottom - Login Section */}
        <div className="col-span-12 md:col-span-8 h-full flex justify-center items-center flex-col">
          <div className="bg-yellow-300 flex w-full text-center justify-center items-center font-semibold text-black">
            <div className="w-[100px] bg-blue-800 text-yellow-300 font-bold text-xl px-2 py-2">
              Alerts!
            </div>
            <p className="py-2 px-4 mx-auto">
              Revised GST rates for frequently exported goods
            </p>
          </div>
          <div>
            {isLoggedIn !== true ? (
              <>
                <div className="flex justify-center bg-white p-4">
                  <h2 className="text-4xl font-bold text-blue-800">LOGIN</h2>
                </div>
                <div className="flex justify-center md:space-x-4  space-x-4 px-2  py-4">
                  <button
                    className="bg-red-600 text-white py-2 px-4 rounded-lg"
                    onClick={() => handleLogin("IMPORTER")}
                  >
                    I am an importer residing outside India
                  </button>
                  <button
                    className="bg-gray-200 text-black py-2 px-4 rounded-lg"
                    onClick={() => handleLogin("EXPORTER")}
                  >
                    I am an exporter residing in India
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="pt-4">
                  <button
                    className="bg-red-600 text-white py-2 px-4 rounded-lg"
                    onClick={Logout}
                  >
                    Log Out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
