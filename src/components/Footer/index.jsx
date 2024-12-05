const Footer = () => {
    return (
      <footer className="py-2 text-white bg-gray-900 px-[80px]  ">
        <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
          {/* Logo dan Deskripsi */}
          <div className="mb-6 md:mb-0">
            <h2 className="mb-2 text-xl font-bold">My Portfolio</h2>
            <p className="text-sm text-gray-400">
              Providing valuable content and solutions for all your needs.
            </p>
          </div>
  
          {/* Navigasi */}
          <div className="flex gap-8 mb-6 text-sm md:mb-0">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skill" className="transition hover:text-cyan-400">
              Skill
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
  
          {/* Media Sosial */}
          {/* <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div> */}
        </div>
  
        {/* Copyright */}
        <div className="mt-6 text-xs text-center text-gray-500">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  