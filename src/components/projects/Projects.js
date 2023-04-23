import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFor,
  projectFive,
  projectSix,
  projectSeve,
  projectEight,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-14">
        <a
          href="https://bsmiguell.github.io/Portfolio/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
        </a>

        <a
          href="https://bsmiguell.github.io/Site-de-Games/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectsCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          />
        </a>

        <a
          href="https://bsmiguell.github.io/GO-HQS/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
        </a>

        <a
          href="https://bsmiguell.github.io/Site-de-Animes/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectFor}
          />
        </a>

        <a
          href="https://bsmiguell.github.io/Site-de-HQS/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectsCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectFive}
          />
        </a>

        <a
          href="https://bsmiguell.github.io/Site-Sobre-Filmes/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectSix}
          />
        </a>

        <a
          href="https://bsmiguell.github.io/Site-de-Musicas/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectSeve}
          />
        </a>
        <a
          href="https://bsmiguell.github.io/Portifolio-2/"
          rel="noreferrer"
          target="_blank"
        >
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectEight}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
