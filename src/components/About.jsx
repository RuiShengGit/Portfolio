import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { profile, resume } from "../assets";

import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full mt-10">
      {/* Profile Picture */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex-shrink-0 w-[450px] h-[450px] rounded-full overflow-hidden border-4 border-gray-300 px-4"
      >
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* About Me Title and Text */}
      <div className="flex flex-col justify-center md:justify-start md:items-start items-center text-center md:text-left px-4">
        {/* About Me Heading */}
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>ABOUT ME</h2>
        </motion.div>

        {/* About Me Text */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[28px] max-w-6xl leading-[40px]"
        >
          I am a Computer Engineering student passionate about programming and
          software development. I have experience building websites using
          technologies like React and Node.js effectively. I am skilled in Git
          for version control and familiar with databases like MongoDB. As a
          fast learner and team player, I thrive on creating innovative projects
          with others. I am always eager to explore new technologies and grow as
          a developer consistently. Let's work together to create something
          amazing!
        </motion.p>

        {/* Download Resume Button */}
        <motion.a
          href={resume} // Replace with your actual resume file path
          download
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-6 px-9 py-6 bg-blue-500 text-white font-bold text-[20px] rounded-md hover:bg-blue-600 transition-all"
        >
          Download CV
        </motion.a>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
