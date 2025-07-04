'use client'
import { Typewriter } from 'react-simple-typewriter'
import ProjectData from '../components/portofolio/ProjectData';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-screen max-w-none !overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center text-white px-4">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
            <source src="/real-hawai.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
         {/* Konten di atas video */}
          <div className="relative z-10 px-4">
              <h1 className="text-5xl font-bold mb-4">
                  Hi, I&#39;m{' '}
                  <span className="text-indigo-600">
                      <Typewriter
                      words={['Lukman', 'Frontend Engineer', 'Web Developer', 'what you need']}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                      />
                  </span>
              </h1>
          </div>
            <div className='relative z-10 px-4'>
            <p className="text-xl mb-6 max-w-xl">
                I build clean, modern, and responsive websites using modern technologies.
            </p>
            <a
                href="#projects"
                className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
            >
                See my works
            </a>
            </div>

        {/* Optional: overlay gelap */}
        <div className="absolute inset-0 bg-slate-950 opacity-80 z-0"></div>
      </section>

      {/* About Section */}
      <section id='about' className="pt-20 pb-20 bg-white text-gray-800 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/project-images/closeup-profile.jpeg"
            alt="kimmycode"
            width="200"
            height="200"
            className="rounded-full mb-6 w-[200px] h-[200px] object-cover mx-auto"
          />
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            Hi mate! My name is <strong>Muhammad Lukmanulhakim </strong>, <br />but you can also call me <strong>Lukman</strong>.
            I&#39;m a Frontend Engineer with 5 years of experience. Previously, I worked mostly with Angular (up to version 14) and always kept up with the latest frontend trends. 
            Recently, I&#39;ve started learning React.js and Next.js including this website, which was built using Next.js! 😄
            <br /><br/>
              🚀 Good news! I&#39;m currently open to new opportunities whether it&#39;s a full-time role, freelance projects, or contract-based work.
              <br />
              If you&#39;re hiring or have something exciting in mind, feel free to <a href="#contact" className="text-blue-600 underline hover:text-blue-800 font-semibold">contact me here</a>.
              <br /> <br/>
              Let’s make some juicy art together! ^^

          </p>
          <div className="flex flex-wrap justify-center gap-4 py-4">
            <span className="bg-orange-200 px-4 py-2 rounded-full">HTML</span>
            <span className="bg-orange-200 px-4 py-2 rounded-full">CSS</span>
            <span className="bg-indigo-200 px-4 py-2 rounded-full">JavaScript</span>
            <span className="bg-indigo-200 px-4 py-2 rounded-full">Jquery</span>
            <span className="bg-indigo-200 px-4 py-2 rounded-full">Angular</span>
            <span className="bg-indigo-200 px-4 py-2 rounded-full">React JS</span>
            <span className="bg-indigo-200 px-4 py-2 rounded-full">Next JS</span>
            <span className="bg-red-200 px-4 py-2 rounded-full">PHP</span>
            <span className="bg-red-200 px-4 py-2 rounded-full">Laravel</span>
            <span className="bg-red-200 px-4 py-2 rounded-full">CMS October</span>
            <span className="bg-yellow-200 px-4 py-2 rounded-full">MySQL</span>
            <span className="bg-yellow-200 px-4 py-2 rounded-full">PostgreSQL</span>
            <span className="bg-green-200 px-4 py-2 rounded-full">GIT</span>
            <span className="bg-green-200 px-4 py-2 rounded-full">Bitbucket</span>
            <span className="bg-green-200 px-4 py-2 rounded-full">Jira</span>
            <span className="bg-slate-100 px-4 py-2 rounded-full">Agile SDLC</span>
            <span className="bg-slate-100 px-4 py-2 rounded-full">Waterfall SDLC</span>
            <span className="bg-slate-100 px-4 py-2 rounded-full">Leadership</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800 text-gray-800 px-6">
        <ProjectData />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-6 text-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-10 text-lg text-gray-600">
            Looking to collaborate or hiring a frontend engineer? I&#39;m currently open to work and would love to hear from you. Let&#39;s connect!
          </p>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Email */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 6 8-6V18H4z" />
              </svg>

              <h4 className="font-semibold">Email</h4>
              <a href="mailto:ml.hakimm@gmail.com" className="text-blue-600 hover:underline mt-2">
                ml.hakimm@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 mb-4" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16.001 2.999c-7.285 0-13.001 5.715-13.001 13.001 0 2.289.623 4.499 1.709 6.449l-1.812 6.623 6.792-1.781a12.948 12.948 0 006.312 1.628c7.286 0 13.001-5.715 13.001-13.001s-5.715-13.001-13.001-13.001zm0 23.624c-2.043 0-4.084-.545-5.877-1.575l-.422-.25-4.027 1.056 1.072-3.938-.274-.445c-1.002-1.627-1.528-3.496-1.528-5.372 0-5.717 4.652-10.368 10.368-10.368s10.368 4.652 10.368 10.368c0 5.717-4.652 10.368-10.368 10.368zm5.582-7.567c-.305-.152-1.805-.891-2.084-.99-.277-.102-.48-.152-.682.152s-.782.99-.96 1.192c-.176.203-.355.228-.66.076-.305-.152-1.285-.475-2.447-1.51-.904-.803-1.514-1.795-1.691-2.1-.176-.304-.019-.468.133-.619.137-.136.305-.355.457-.533.153-.177.203-.304.305-.507.102-.203.051-.38-.025-.533-.076-.152-.682-1.646-.934-2.252-.246-.589-.497-.508-.682-.518-.176-.007-.38-.009-.582-.009s-.533.076-.813.38c-.277.305-1.066 1.042-1.066 2.536s1.092 2.941 1.244 3.144c.152.203 2.141 3.267 5.189 4.58.725.313 1.29.5 1.73.64.727.232 1.388.199 1.908.121.582-.086 1.805-.736 2.06-1.445.254-.711.254-1.32.178-1.445-.076-.127-.279-.203-.584-.355z"/>
            </svg>

              <h4 className="font-semibold">WhatsApp</h4>
              <a href="https://wa.me/6283878373773" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline mt-2">
                +62 838-7837-3773
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-700 mb-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.5 8h4V24h-4V8zm7.5 0h3.833v2.2h.053c.534-1.014 1.837-2.2 3.78-2.2 4.04 0 4.784 2.66 4.784 6.116V24h-4V14.6c0-2.243-.04-5.134-3.126-5.134-3.13 0-3.609 2.445-3.609 4.973V24h-4V8z"/>
            </svg>

              <h4 className="font-semibold">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/muhammad-lukmanulhakim/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline mt-2">
                muhammad-lukmanulhakim
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className='bg-white text-center px-2'>
        <div className="flex text-indigo-900 justify-center py-5">
          <span>Copyright &copy;2025 | KimmyCode - Muhammad Lukmanulhakim</span>
        </div>
      </footer>
    </main>
  );
}
