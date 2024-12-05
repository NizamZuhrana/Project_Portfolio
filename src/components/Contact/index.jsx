import { BiLogoGmail } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = ({style}) => {
  return (
    <div id="contact" className="px-[80px] py-[96px] border-t-4 ">
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="p-2 mb-5 text-center rounded-xl bg-slate-600">
        <h2 className="font-bold text-white text-md">Contact Me</h2>
      </div>
      <p className="text-center  max-w-[600px]">
        If you have any questions, opportunities, or just want to connect, feel free to reach out using the form below or through my contact information.
      </p>
    </div>
    <div className="flex flex-col items-center">
      <form className="w-full max-w-[600px] bg-gray-600 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-900" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-900" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-900" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Enter your message"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 font-bold text-white transition rounded-lg bg-cyan-600 hover:bg-cyan-700"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="mt-10 text-center">
        <p>
          Or reach me directly at:
        </p>
        <p className="flex items-center gap-2 font-bold text-cyan-800"><BiLogoGmail className="text-xl"/>
          nizamzuhrana@gmail.com
        </p>
      </div>
      <div className="flex gap-2 py-4 text-2xl">
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
  </div>
  );
};

export default Contact;
