import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Studying Programming"
            subTitle="Studying Programming by PDA 2022 - 2023"
            result="in progress"
            des="Hi, my name is Bruno, I'm 19 years old and I'm currently programming with PDA (HTML, CSS, JAVASCRIPT AND PYTHON)."
          />
          <ResumeCard
            title="Studying Programming"
            subTitle="Studying Programming by PDA 2022 - 2023"
            result="in progress"
            des="Hi, my name is Bruno, I'm 19 years old and I'm currently programming with PDA (HTML, CSS, JAVASCRIPT AND PYTHON)."
          />
          <ResumeCard
            title="Studying Programming"
            subTitle="Studying Programming by PDA 2022 - 2023"
            result="in progress"
            des="Hi, my name is Bruno, I'm 19 years old and I'm currently programming with PDA (HTML, CSS, JAVASCRIPT AND PYTHON)."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Studying Programming"
            subTitle="Studying Programming by PDA 2022 - 2023"
            result="in progress"
            des="Hi, my name is Bruno, I'm 19 years old and I'm currently programming with PDA (HTML, CSS, JAVASCRIPT AND PYTHON)."
          />
          <ResumeCard
            title="Studying Programming"
            subTitle="Studying Programming by PDA 2022 - 2023"
            result="in progress"
            des="Hi, my name is Bruno, I'm 19 years old and I'm currently programming with PDA (HTML, CSS, JAVASCRIPT AND PYTHON)."
          />
          <ResumeCard
            title="Studying Programming"
            subTitle="Studying Programming by PDA 2022 - 2023"
            result="in progress"
            des="Hi, my name is Bruno, I'm 19 years old and I'm currently programming with PDA (HTML, CSS, JAVASCRIPT AND PYTHON)."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
