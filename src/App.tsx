import { FaYoutube } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto">
      {/* Top Banner Section */}
      <div className="w-full">
        <img
          src="./top-banner.jpg"
          alt="festive-banner"
          className="w-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <div className="px-4 md:px-[10%] flex flex-col items-center justify-center py-8 md:py-12">
        <p className="uppercase text-xs md:text-sm font-semibold tracking-widest text-gray-700">
          you are invited
        </p>

        <div className="flex flex-col  justify-center gap-2 mt-4">
          <h2 className="text-2xl md:text-4xl font-bold font-bricolage text-gray-800">
            Aroma
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold font-bricolage tracking-wider text-primary">
            Christmas
          </h1>
          <h2 className="text-right text-2xl md:text-4xl font-bold font-bricolage text-gray-800">
            Celebrations
          </h2>
        </div>

        <p className="uppercase text-primary font-semibold text-sm mt-6">
          NKNR Gardens,
        </p>
        <p className="text-center text-gray-700 text-sm md:text-base">
          Pillar no. 846, 847, Moosapet, <br /> Kukatpally main road, Hyderabad
        </p>

        <p className="max-w-2xl text-center mt-4 md:mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
          Join us for an unforgettable celebration filled with joy, lights, and
          festive cheer. Experience uplifting worship, inspiring messages, and
          fellowship with Christian believers. Reserve your spot now and be part
          of our exclusive Christmas gathering at NKNR Gardens.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 md:gap-4 mt-6 md:mt-8 w-full md:w-auto justify-center">
          <a
            href="https://youtube.com/@georgesambathini?si=5RvseZViWIrg0pdK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary inline-flex items-center gap-1 text-white font-bricolage px-6 md:px-8 py-3 rounded-lg font-semibold tracking-wide hover:bg-red-900 transition-colors text-center"
          >
            Subscribe Now <FaYoutube size={22} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 inline-flex items-center gap-1 text-white font-bricolage px-6 md:px-8 py-3 rounded-lg font-semibold tracking-wide hover:bg-emerald-800 transition-colors text-center"
          >
            <RiLogoutCircleRLine size={18} />
            Register Now
          </a>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="w-full bg-primary  mt-6 md:mt-10">
        <img
          src="./decoration-top.jpg"
          alt="decoration-top"
          className="w-full object-cover mb-6 md:mb-8"
        />

        <div className="px-4 md:px-[10%]">
          <p className="uppercase text-lg md:text-2xl font-bold text-center font-bricolage text-white tracking-wider">
            Tabernaclers Ministries
          </p>
          <p className="text-white text-center text-sm md:text-base mt-2">
            Inviting Christian Believers
          </p>
          <p className="text-white text-center text-sm md:text-base font-semibold mt-2">
            December 2025 | Starts from 06:00 PM
          </p>

          <div className="flex items-center w-full">
            <span className="h-px bg-white/20 w-full" />
            <span className="uppercase px-3 my-6 text-white/70 text-xs font-semibold">
              pastors
            </span>
            <span className="h-px bg-white/20 w-full" />
          </div>

          <div className="flex items-center justify-between text-white">
            <div className="flex flex-col gap-1">
              <p className="text-lg md:text-xl font-bold font-bricolage">
                George Sambathini
              </p>
              <span className="text-white/80 text-sm">Word of God</span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg md:text-xl font-bold font-bricolage">
                Benny Joshua
              </p>
              <span className="text-white/80 text-sm">Praise & Worship</span>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="p-6 md:p-8 my-6 md:my-8">
            <p className="text-white text-center text-sm md:text-base">
              Join fellow believers this Christmas to worship and glorify God.
              Your presence contributes to making this celebration spiritually
              meaningful and blessed. Choose the one that best fits your event's
              tone!
            </p>
          </div>
          <p className="text-white text-center text-sm md:text-base italic">
            "Wishing you a season filled with joy, peace, and the light of
            Christmas blessings."
          </p>

          <p className="text-white/80 text-end mr-5 mt-8">Best wishes,</p>
          <p className="text-end mr-5 text-white uppercase">
            Tabernaclers Ministries
          </p>
        </div>

        <img
          src="./decoration-bottom.jpg"
          alt="decoration-bottom"
          className="w-full object-cover mt-6 md:mt-8"
        />
      </div>

      {/* Featured Event Section */}
      <div className="w-full px-4 md:px-[10%] py-4 md:py-8">
        <div className="flex items-center w-full">
          <span className="h-px bg-primary/20 w-full" />
          <span className="uppercase px-3 my-6 tracking-wider text-primary text-nowrap text-xs font-semibold">
            Featured Event
          </span>
          <span className="h-px bg-primary/20 w-full" />
        </div>
        <img
          src="./event-banner.jpeg"
          alt="aroma-christmas-event-banner"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Christmas Tree Section */}
      <div className="w-full">
        <img
          src="./tree.jpg"
          alt="christmas-tree-decoration"
          className="w-full object-cover -mb-5"
        />
      </div>

      {/* Merry Christmas Message */}
      <div className="w-full bg-linear-to-b from-red-50 to-white py-12 md:py-16 px-4 text-center">
        <h1 className="font-bricolage text-4xl md:text-6xl font-bold text-primary mb-4 tracking-wide">
          Merry Christmas
        </h1>
        <p className="text-gray-700 text-lg md:text-xl font-semibold mb-2">
          Celebrate the Spirit of Faith and Joy
        </p>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          May your heart be filled with the warmth of loved ones, the joy of
          celebration, and the peace that comes from faith. This Christmas, let
          us gather as a community to share blessings, worship together, and
          spread the message of hope and love.
        </p>
      </div>

      {/* Footer */}
      {/* <div className="w-full py-4 md:py-6 px-4 text-gray-600 text-xs md:text-sm border-t border-gray-300 text-center bg-white">
        <p className="mb-2">
          © 2025 Tabernaclers Ministries. All rights reserved.
        </p>
        <p className="text-gray-500">
          For more information:{" "}
          <span className="font-semibold">+91 7702239684</span>
        </p>
      </div> */}
      <div className="w-full">
        <img
          src="./footer-image.jpg"
          alt="christmas-tree-decoration"
          className="w-full object-cover -mb-5"
        />
      </div>
    </div>
  );
};

export default App;
