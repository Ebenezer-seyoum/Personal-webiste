import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 mx-auto relative">
        {/* Decorative Lines */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-56 w-[3px] bg-gradient-to-b from-yellow-400 via-yellow-300 to-transparent rounded-r-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-56 w-[3px] bg-gradient-to-b from-transparent via-yellow-300 to-yellow-400 rounded-l-full"></div>

        {/* Decorative Blurs */}
        <div className="absolute -top-16 -left-16 w-52 h-52 bg-yellow-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-yellow-300/10 rounded-full filter blur-2xl"></div>

        {/* Main Card Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          className="w-full max-w-[96rem] mx-auto bg-white text-green-900 rounded-lg border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.1)] px-4 sm:px-6 md:px-8 lg:px-20 py-10 md:py-14 lg:py-16 flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-12"
        >
          {/* Text Content */}
        <div className="w-full lg:w-8/12 max-w-[850px] text-left bg-slate-300 p-4 sm:p-6 md:p-8 rounded-lg">
  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 md:leading-9 font-normal text-green-900 font-serif text-left sm:text-justify">
    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-dark font-serif">About Me</h1>
    
    <p>
      I recently graduated with a degree in Information Technology and have gained practical experience
      in full-stack development, mobile app development, networking, and cybersecurity. I’m comfortable
      working with Python, PHP, React.js, Node.js, and troubleshooting networks, and I’ve also completed
      training in IoT and cybersecurity.
    </p>
    
    <p>
      During university, I worked on a court information management system project where I built a
      full-stack application to help improve case tracking and data access for legal institutions. I also had
      the chance to intern at East Africa Lion Brands, where I supported system maintenance, IT support,
      and security tasks.
    </p>
    
    <p>
      I enjoy working with databases, Git, and Linux, and take pride in writing clean, efficient code that
      solves real problems. I’m always eager to learn new skills, adapt to challenges, and contribute
      meaningfully to any team I join.
    </p>
    
    <p>
      In addition to development, I have a strong interest in DevOps practices, including version control
      with Git, automation, CI/CD pipelines, Linux system administration, and containerization tools like
      Docker. Now, I’m excited to bring my abilities to a forward-thinking organization where I can
      continue growing as a developer.
    </p>
  </div>
</div>


          {/* Profile Image */}
          <div
            className="w-full sm:w-3/4 md:w-2/3 lg:w-4/12 flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="relative group w-full aspect-square max-w-[320px] sm:max-w-[360px] rounded-lg overflow-hidden border-4 border-white/10 shadow-xl hover:shadow-yellow-400/30 transition-shadow duration-500">
              <Image
                src="/images/about/profile.jpg"
                alt="Ebenezer Seyoum"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
