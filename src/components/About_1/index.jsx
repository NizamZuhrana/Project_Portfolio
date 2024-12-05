import { FiMapPin } from "react-icons/fi";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import fotoProfile from "../../assets/Profile.jpg";

const About_1 = () => {
  return (
    <div className="px-[80px] py-[96px] flex justify-between">
      <div>
        <div>
          <h1 className="text-[40px] font-bold text-6xl pb-4 ">
            Hi, I'm Nizam
          </h1>
        </div>
        <div className="flex justify-between gap-4 pb-12">
          <p className="text-[20px] font-serif font-medium">
            I'm a frontend developer with a passion for
            <br />
            creating innovative solutions to complex problems.
          </p>
        </div>
        <div className="flex flex-col pb-6 ">
          <div className="flex items-center gap-2 py-2">
            <FiMapPin />
            <p>Indonesia</p>
          </div>
          <div className="flex items-center gap-2">
            <VscActivateBreakpoints color="green" />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-2 py-4 text-2xl">
          <a href="mailto:nizamzuhrana@gmail.com">
            <BiLogoGmail />
            </a>
          <a href="https://github.com/NizamZuhrana" target="_blank">
            <FaGithub />
            </a>
          <a href="https://www.instagram.com/rn.zraa_/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://wa.me/6282136501205" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div>
        <img
          className="w-[330px] h-[330px] rounded-full border-2 border-black object-cover shadow-2xl shadow-slate-800"
          src={fotoProfile}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default About_1;
