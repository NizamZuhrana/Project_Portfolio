import { Button } from "@mui/material";
import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div className=" w-full py-[16px] px-[80px] border-b-2 bg-gray-900 text-white">
      <div className="flex items-center justify-between ">
        <div>
          <p>Muhammad Nizam</p>
        </div>
        <div className="ml-[500px]">
          <ul className="flex gap-8">
            <a href="#about"><li>About</li></a>
            <a href="#skill"><li>Skill</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <button
            className="text-xl"
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
          >
            {theme ? <IoSunny/> : <BsFillMoonStarsFill/>}
            
          </button>
          <Button variant="contained" color={theme? "secondary" : "primary"}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
