import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white overflow-hidden"
    >
      <div className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Decorative Lines */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-56 w-[3px] bg-gradient-to-b from-yellow-400 via-yellow-300 to-transparent rounded-r-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-56 w-[3px] bg-gradient-to-b from-transparent via-yellow-300 to-yellow-400 rounded-l-full"></div>

        {/* Decorative Blurs */}
        <div className="absolute -top-16 -left-16 w-52 h-52 bg-yellow-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-yellow-300/10 rounded-full filter blur-2xl"></div>

        {/* Main Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          className="bg-white text-green-900 rounded-lg border border-gray-200 shadow-xl px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16 flex flex-col-reverse lg:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <div className="w-full lg:w-8/12">
            <div className="space-y-6 text-justify font-serif">
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">About Me</h1>
              <p className="text-lg md:text-xl leading-relaxed">
                I recently graduated with a degree in Information Technology and have gained practical experience
                in full-stack development, mobile app development, networking, and cybersecurity. I’m comfortable
                working with Python, PHP, React.js, Node.js, and troubleshooting networks, and I’ve also completed
                training in IoT and cybersecurity.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                During university, I worked on a court information management system project where I built a
                full-stack application to help improve case tracking and data access for legal institutions. I also had
                the chance to intern at East Africa Lion Brands, where I supported system maintenance, IT support,
                and security tasks.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                I enjoy working with databases, Git, and Linux, and take pride in writing clean, efficient code that
                solves real problems. I’m always eager to learn new skills, adapt to challenges, and contribute
                meaningfully to any team I join.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                In addition to development, I have a strong interest in DevOps practices, including version control
                with Git, automation, CI/CD pipelines, Linux system administration, and containerization tools like
                Docker. Now, I’m excited to bring my abilities to a forward-thinking organization where I can
                continue growing as a developer.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className="w-full sm:w-3/4 md:w-2/3 lg:w-4/12 flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[320px] md:max-w-[360px] rounded-lg overflow-hidden border-4 border-white/10 shadow-xl hover:shadow-yellow-400/30 transition-shadow duration-500">
              <Image
                src="/images/about/profile.jpg"
                alt="Ebenezer Seyoum"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition duration-300 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
