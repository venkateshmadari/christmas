import { motion } from "framer-motion";

const textVariant: any = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const GreetingSection = () => {
  return (
    <>
      <div className="w-full">
        <img
          src="./tree.jpg"
          alt="christmas-tree-decoration"
          className="w-full object-cover -mb-5"
        />
      </div>

      <div className="w-full bg-linear-to-b from-red-50 to-white py-12 md:py-16 px-4 text-center">
        {/* Heading */}
        <motion.h1
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="font-bricolage text-4xl md:text-6xl font-bold text-primary mb-4 tracking-wide"
        >
          Merry Christmas
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-700 text-lg md:text-xl font-semibold mb-2"
        >
          Celebrate the Spirit of Faith and Joy
        </motion.p>

        {/* Paragraph */}
        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          May your heart be filled with the warmth of loved ones, the joy of
          celebration, and the peace that comes from faith. This Christmas, let
          us gather as a community to share blessings, worship together, and
          spread the message of hope and love.
        </motion.p>
      </div>

      <div className="w-full">
        <img
          src="./footer-image.jpg"
          alt="christmas-tree-decoration"
          className="w-full object-cover -mb-5"
        />
      </div>
    </>
  );
};

export default GreetingSection;
