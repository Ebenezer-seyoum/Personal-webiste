import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-white bg-opacity-5 pt-4 md:pt-10 lg:pt-0"
        data-wow-delay=".1s"
      >
        <div className="bg-dark-blue/10 py-4">
          <div className="container">
            <p
              className="text-center text-base"
              style={{
                color: "#006400", // Dark green
                fontFamily: "'Times New Roman', Times, serif"
              }}
            >
              © {new Date().getFullYear()} Designed by Ebenezer Seyoum
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
