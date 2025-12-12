import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const EventDetails = () => {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleLocationClick = () => {
    window.open(
      "https://maps.app.goo.gl/Jqt1U5BJi6g7z8nX9",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.div
      className="w-full bg-primary flex flex-col items-center mt-6 md:mt-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {/* Top Decoration */}
      <img
        src="./decoration-top.jpg"
        alt="decoration-top"
        className="w-full object-cover mb-6 md:mb-8"
        style={{ minHeight: "50px", backgroundColor: "#ccc" }}
      />

      <div className="px-4 md:px-[10%] text-white flex flex-col items-center text-center">
        {/* Church Title */}
        <motion.p
          className="uppercase text-lg md:text-2xl font-bold text-center font-bricolage tracking-wider"
          variants={fadeUp}
        >
          Tabernaclers Ministries
        </motion.p>

        <motion.p
          className="text-white text-center text-sm md:text-base mt-2"
          variants={fadeUp}
        >
          Inviting Christian Believers
        </motion.p>

        <motion.p
          className="text-white text-center text-sm md:text-base font-semibold mt-2"
          variants={fadeUp}
        >
          December 2025 • Starts at 06:00 PM
        </motion.p>

        {/* Event Address Section - MOVED HERE */}
        <motion.div className="my-6 md:my-8" variants={fadeUp}>
          <p className="uppercase text-sm text-white/90 tracking-wider mb-2">
            Church Address
          </p>
          <p className="text-white text-base leading-relaxed font-semibold">
            Dine Inn Chinna Banquet Hall <br />
            Pillar No. 600 <br />
            Miyapur, Hyderabad
          </p>

          {/* Location Pin/Map Link */}
          <button
            onClick={handleLocationClick}
            className="mt-4 md:mt-6 flex items-center justify-center gap-2 px-4 pt-3 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group max-w-xs mx-auto w-full"
          >
            <FaMapMarkerAlt className="text-white" />
            <span className="text-white font-medium underline text-sm md:text-base">
              View location
            </span>
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center w-full my-6 max-w-[300px]"
          variants={fadeUp}
        >
          <span className="h-px bg-white/20 w-full" />
          <span className="uppercase px-3 text-white/70 text-xs font-semibold">
            Pastor
          </span>
          <span className="h-px bg-white/20 w-full" />
        </motion.div>

        {/* Pastor Info Centered */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-6"
          variants={fadeUp}
        >
          <img
            src="./pastor.jpg"
            alt="Pastor George Sambathini"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-white shadow-lg"
            onError={(e) => {
              console.log("Pastor image failed to load");
              e.currentTarget.style.backgroundColor = "#ff9900";
            }}
          />

          <div>
            <p className="text-white text-lg md:text-xl font-bold font-bricolage">
              George Sambathini
            </p>
            <span className="text-white/80 text-sm">Word of God</span>
          </div>
        </motion.div>

        {/* Join Fellow Section */}
        <motion.div
          className="p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg max-w-[600px] mb-6"
          variants={fadeUp}
        >
          <p className="text-white text-center text-sm md:text-base leading-relaxed">
            Join fellow believers this Christmas to worship and glorify God.{" "}
            <br />
            You are welcome to come anytime to be part of the holy prayer and
            experience God's presence. Let us gather in unity, worship together,
            and celebrate the birth of our Savior.
          </p>
        </motion.div>

        {/* Closing Message */}
        <motion.p
          className="text-white text-center text-sm md:text-base italic mt-6 max-w-[600px]"
          variants={fadeUp}
        >
          "Wishing you a season filled with joy, peace, and the light of
          Christmas blessings."
        </motion.p>

        <motion.p className="text-white/80 mt-8" variants={fadeUp}>
          Best wishes,
        </motion.p>

        <motion.p className="uppercase font-semibold mb-4" variants={fadeUp}>
          Tabernaclers Ministries
        </motion.p>
      </div>

      {/* Bottom Decoration */}
      <img
        src="./decoration-bottom.jpg"
        alt="decoration-bottom"
        className="w-full object-cover mt-6 md:mt-8"
        style={{ minHeight: "50px", backgroundColor: "#ccc" }}
      />
    </motion.div>
  );
};

export default EventDetails;
