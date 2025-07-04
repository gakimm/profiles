'use client';

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import ModalPopover from "../utils/ModalPopover";

interface Project {
  id: number;
  name: string;
  src: string;
  src2?: string;
  alt: string;
  description: string;
  width: number;
  height: number;
  link: string;
}

export default function ProjectData() {
  const data: Project[] = [
    {
      id: 1,
      name: "Kimmycode Interview",
      src: "/project-images/project-placeholder.jpg",
      alt: "kimmycode-interview",
      description: `<p>This project was created to help improve my English communication skills, especially for job interviews where I often felt nervous. It serves as a practice tool to build confidence and fluency through repeated exercises and real interview scenarios. The goal is to make English interviews easier and more natural over time.</p>

      <p>You can demo this project by signing up with your Google account.</p>

      <p><strong>Tech stack & tools used:</strong></p>

      <ul>
        <li>- React.js</li>
        <li>- Next.js</li>
        <li>- Zustand (State Management)</li>
        <li>- Strapi.io (Headless CMS)</li>
      </ul>
`,
      width: 300,
      height: 400,
      link: "under-construction",
    },
    {
      id: 2,
      name: "Kopra By Mandiri",
      src: "/project-images/kopra.png",
      alt: "kopra-by-mandiri",
      description: `<p><strong>Kopra by Mandiri</strong> is a digital platform developed by Bank Mandiri to streamline financial transactions and cash management for corporate clients. It provides an integrated ecosystem that covers services such as trade finance, liquidity management, and approval workflows—all in a secure and user-friendly interface.</p><br>

        <p>In this project, I was directly involved in the development of several key features, including:</p>

        <ul>
          <li><strong>Liquidity:</strong> Built modules to support corporate clients in managing cash flow and optimizing fund allocation across accounts.</li>
          <li><strong>Approval Scheme:</strong> Developed a flexible, multi-layer approval system that can be tailored to match the client’s organizational structure.</li>
          <li><strong>Trade:</strong> Contributed to the digitization of trade finance processes, including functionalities for Letters of Credit (LC), SKBDN, and other export-import documents.</li>
        </ul><br>

        <p><strong>Tech stack & tools used:</strong></p>

        <ul>
          <li>- Angular 14</li>
          <li>- React.js</li>
          <li>- Tailwind CSS</li>
          <li>- SonarQube</li>
          <li>- Karma (Unit Testing)</li>
          <li>- RESTful API</li>
          <li>- Jira (Issue Tracking)</li>
          <li>- Confluence (Documentation)</li>
          <li>- Agile Workflow (SDLC)</li>
        </ul>
`,
      width: 300,
      height: 600,
      link: "https://koprabymandiri.com/",
    },
    {
      id: 3,
      name: "Pesanvilla Web",
      src: "/project-images/pesan-villa-web.png",
      src2: "/project-images/pesan-villa-list.png",
      alt: "Pesan Villa",
      description: `<p><strong>Pesan Villa</strong> is an accommodation booking platform that helps users find and reserve villas, hotels, rooms, and even catering services — all at prices that match the available facilities. While the current focus is on the Puncak area, the platform is designed to scale and support more destinations in the future.</p><br>

      <p>This was my first project using <strong>React.js</strong> and <strong>Next.js</strong>, created as part of my journey to learn and explore new technologies. I built Pesan Villa while familiarizing myself with the React and Next.js environment, combining hands-on learning with real project implementation.</p><br>

      <p><strong>Tech stack & tools used:</strong></p>

      <ul>
        <li>- React.js</li>
        <li>- Next.js</li>
        <li>- Tailwind CSS</li>
        <li>- Zustand (State Management)</li>
        <li>- Minio (Object Storage)</li>
        <li>- PostgreSQL</li>
        <li>- PHP Laravel (as Backend API)</li>
        <li>- Jira</li>
      </ul>
`,
      width: 300,
      height: 400,
      link: "under-construction",
    },
    {
      id: 4,
      name: "Lakuemas",
      src: "/project-images/lakuemas-dashboard.png",
      alt: "lakuemas",
      description: `<p><strong>Lakuemas</strong> is a digital platform that enables users to buy, sell, store, and transfer gold easily and securely through both mobile apps and websites. It offers an affordable and flexible way to invest in gold by integrating with physical retail partners across various locations. This modern solution simplifies gold investment by eliminating the need for physical storage, making it more accessible to everyone.</p><br>

      <p><strong>Tech stack & tools used:</strong></p>

      <ul>
        <li>- Angular</li>
        <li>- Typescript</li>
        <li>- Tailwind CSS</li>
        <li>- Git</li>
        <li>- Trello</li>
        <li>- Agile Workflow</li>
      </ul>
`,
      width: 300,
      height: 400,
      link: "notfound",
    },
    {
      id: 5,
      name: "Talent Hero",
      src: "/project-images/talent-hero.png",
      alt: "Talent Hero",
      description: `<p><strong>Talent Hero</strong> is a unique job recruitment portal that introduces a dual-role system: <strong>Hero</strong> and <strong>Talent</strong>. A <strong>Hero</strong> acts as a referrer—someone who recommends qualified candidates—while a <strong>Talent</strong> is the person actively seeking or being considered for hiring opportunities.</p><br>

      <p>In this project, I was involved in the re-engineering and redevelopment of the version 2 (v2) platform, focusing on improving system performance, architecture, and user experience.</p><br>

      <p><strong>Tech stack & tools used:</strong></p>

      <ul>
        <li>- PHP Laravel</li>
        <li>- Laravel CMS October</li>
        <li>- Bootstrap</li>
        <li>- jQuery</li>
        <li>- CSS3</li>
        <li>- PostgreSQL</li>
      </ul>
      `,
      width: 300,
      height: 400,
      link: "https://talenthero.id",
    },
    {
      id: 6,
      name: "SIJAPTI",
      src: "/project-images/kasn-logo.jpeg",
      alt: "SIJAPTI",
      description: `<p><strong>SIJAPTI</strong> is an internal system designed to manage the organizational activities within the KASN environment. The system includes key modules such as announcements, confirmation dialogs, approval workflows, and reporting functionalities to support administrative processes efficiently.</p><br>

      <p><strong>Tech stack & tools used:</strong></p>

      <ul>
        <li>- PHP</li>
        <li>- Laravel Lumen</li>
        <li>- Angular</li>
        <li>- Typescript</li>
        <li>- Bootstrap</li>
        <li>- PostgreSQL</li>
      </ul>
      `,
      width: 300,
      height: 400,
      link: "notfound",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function clickLink(link: string) {
    if (link === "notfound") {
      toast.error("Oops, sorry this project is secret XD");
    } else if (link === "under-construction") {
      toast.error("Oops, sorry this project is under construction. stay tune mate !");
    } else {
      window.open(link, "_blank");
    }
  }

  function handleOpenModal(project: Project) {
    setSelectedProject(project);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setSelectedProject(null);
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-12">My Latest Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col h-auto"
          >
            <div className="p-2 h-48 flex-shrink-0 cursor-pointer"  onClick={() => handleOpenModal(project)}>
              <Image
                src={project.src}
                alt={project.alt}
                width={project.width}
                height={project.height}
                className="rounded mb-4 object-cover h-full w-full"
              />
            </div>
            <div className="flex-grow overflow-hidden">
              <h3 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => handleOpenModal(project)}>{project.name}</h3>
              <div
                className={`mb-2 text-sm line-clamp-5 cursor-pointer`}
                onClick={() => handleOpenModal(project)}
                dangerouslySetInnerHTML={{__html: project.description}}
              >
                
              </div>
            </div>
            <div className="p-2 bg-indigo-50 mt-auto">
              <a
                onClick={() => clickLink(project.link)}
                className="block text-center text-sm text-white bg-indigo-800 hover:bg-indigo-900 p-3 rounded font-extralight cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                See this work →
              </a>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedProject && (
        <ModalPopover title={selectedProject.name} onClose={handleCloseModal}>
          <div className="prose text-sm max-h-[80vh] max-w-200 overflow-y-auto p-4">
            {!selectedProject.src2? (
              <Image
                src={selectedProject.src}
                alt={selectedProject.alt}
                width={selectedProject.width}
                height={selectedProject.height}
                className="rounded mb-4 w-full object-cover"
              />
            ) : (
              <div className="flex gap-2 mb-4">
                <Image
                    key={selectedProject.id}
                    src={selectedProject.src}
                    alt={selectedProject.alt}
                    width={selectedProject.width}
                    height={selectedProject.height}
                    className="rounded w-1/2 object-cover"
                  />
                <Image
                    key={`2`+selectedProject.id}
                    src={selectedProject.src2}
                    alt={selectedProject.alt}
                    width={selectedProject.width}
                    height={selectedProject.height}
                    className="rounded w-1/2 object-cover"
                  />
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
          </div>
        </ModalPopover>
      )}
    </div>
  );
}
