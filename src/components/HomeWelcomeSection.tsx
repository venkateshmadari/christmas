"use client";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { motion } from "framer-motion";

// Letter reveal animation
const letterContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const letter: any = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Card animation for social icons
const cardVariants: any = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HomeWelcomeSection = () => {
  const aromaText = "Aroma Christmas".split("");

  return (
    <>
      {/* Banner */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="./top-banner.jpg"
          alt="festive-banner"
          className="w-full object-cover"
        />
      </motion.div>

      {/* Main Container */}
      <div className="px-4 md:px-[10%] flex flex-col items-center justify-center py-8 md:py-12">
        {/* Welcome Header */}
        <motion.div
          className="flex flex-col items-center gap-2 mb-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.p
            className="uppercase text-xs md:text-sm font-semibold tracking-widest text-primary mb-2"
            variants={letter}
          >
            We're delighted to have you
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-semibold font-bricolage text-gray-800 text-center"
            variants={letter}
          >
            Welcome to
          </motion.h1>

          {/* LETTER BY LETTER AROMA CHRISTMAS */}
          <motion.h2
            className="text-4xl md:text-7xl font-bold font-bricolage tracking-wider text-primary text-center flex overflow-hidden"
            variants={letterContainer}
          >
            {aromaText.map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                style={{ display: "inline-block", overflow: "hidden" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.h3
            className="text-2xl md:text-4xl font-bold font-bricolage text-gray-800 text-center mt-2 -mb-5"
            variants={letter}
          >
            2025 Celebrations
          </motion.h3>
        </motion.div>

        {/* EVENT DETAILS */}
        <motion.div
          className="max-w-2xl text-center mt-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <p className="text-gray-700 text-lg md:text-xl mb-3">
            An evening of festive wonder, joyful celebrations, and spiritual
            renewal
          </p>

          <div className="px-6 py-3 md:px-8">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Prepare for an enchanting Christmas celebration where we'll come
              together to share the joy of the season...
              <br />
              <br />
              {/* This is your special invitation to be part of our exclusive
              Christmas gathering filled with light, love, and lasting memories. */}
            </p>

            {/* <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-primary font-semibold text-lg">
                Save the Date • December 13, 2025
              </p>
            </div> */}
          </div>
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div
          className="flex flex-col items-center gap-4 mt-3 md:mt-8 w-full max-w-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
        >
          <a
            href="https://forms.gle/hA63kPj7jKZx9SD69"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary w-full md:w-auto inline-flex items-center justify-center gap-2 text-white font-bricolage px-8 md:px-10 py-4 rounded-xl font-semibold tracking-wide hover:bg-red-900 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm md:text-lg"
          >
            <RiLogoutCircleRLine size={20} />
            Click here to register
          </a>

          {/* <p className="text-gray-500 text-sm">
            Limited seats available • Registration closes Dec 13
          </p> */}
        </motion.div>

        {/* CONNECT SECTION */}
        <motion.div
          className="mt-12 md:mt-16 w-full max-w-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { duration: 0.8 },
            },
          }}
        >
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl md:text-3xl font-bold font-bricolage text-gray-800 mb-3"
              variants={letter}
            >
              Connect With Us
            </motion.h3>

            <motion.p className="text-gray-600" variants={letter}>
              Stay updated with event news, inspirational content, and community
              updates
            </motion.p>
          </div>

          {/* SOCIAL ICONS */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {[
              {
                icon: <FaYoutube size={28} className="text-white" />,
                bg: "bg-red-600",
                link: "https://youtube.com/@georgesambathini",
                label: "YouTube",
                sub: "Subscribe",
                card: "bg-red-50 hover:bg-red-100",
              },
              {
                icon: <FaInstagram size={28} className="text-white" />,
                bg: "bg-linear-to-r from-purple-600 to-pink-600",
                link: "https://www.instagram.com/georgethomassambathini/",
                label: "Instagram",
                sub: "Follow",
                card: "bg-pink-50 hover:bg-pink-100",
              },
              {
                icon: <FaFacebook size={28} className="text-white" />,
                bg: "bg-blue-600",
                link: "https://www.facebook.com/share/1GN6rzdqEr/",
                label: "Facebook",
                sub: "Like",
                card: "bg-blue-50 hover:bg-blue-100",
              },
              {
                icon: <FaSpotify size={28} className="text-white" />,
                bg: "bg-emerald-600",
                link: "https://open.spotify.com/artist/4cSE5tY183CgJk82eqzbnO?si=s1sGVjxASiWLJCMiScpXyQ",
                label: "Spotify",
                sub: "Listen",
                card: "bg-emerald-50 hover:bg-emerald-100",
              },
              {
                icon: <FaWhatsapp size={28} className="text-white" />,
                bg: "bg-green-600",
                link: "https://chat.whatsapp.com/EboTAjOa2fe9pSpOX9kwty",
                label: "WhatsApp",
                sub: "Join Group",
                card: "bg-green-50 hover:bg-green-100",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center justify-center ${item.card} p-5 rounded-xl transition-all duration-300 w-32 md:w-36`}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`${item.bg} p-3 rounded-full group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <span className="mt-3 font-semibold text-gray-800">
                  {item.label}
                </span>
                <span className="text-xs text-gray-500 mt-1">{item.sub}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="text-center mt-8" variants={letter}>
            <p className="text-gray-500 text-sm">
              For inquiries:{" "}
              <span className="text-primary font-semibold">7799337775</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HomeWelcomeSection;
