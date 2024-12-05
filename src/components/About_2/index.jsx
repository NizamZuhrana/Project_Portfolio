import fotoAbout from "../../assets/About.jpg";
const About_2 = () => {
  return (
    <div id="about">
      <div className="px-[80px] py-[96px] border-t-4 ">
        <div className="flex items-center justify-center mb-14 ">
          <div className="p-2 font-bold text-center text-white bg-slate-600 rounded-xl w-fit h-fit ">
            <p>About Me</p>
          </div>
        </div>
        <div className="flex gap-32">
          <img
            className="w-[350px] h-[400px] object-cover rounded-3xl shadow-xl shadow-slate-800"
            src={fotoAbout}
            alt=""
          />
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold ">
              Curious about me? Here you have it:
            </h2>
            <div className="flex flex-col gap-4">
              <p>
                I am a passionate *Front-End Developer, a creative
                **Photographer, and an engaging **YouTube Live Streamer*.
              </p>
              <p>
                With a strong foundation in web development, I specialize in
                creating intuitive, responsive, and visually captivating user
                interfaces. My goal is to bring designs to life while ensuring
                seamless user experiences.
              </p>
              <p>
                As a *Photographer*, I thrive on capturing meaningful moments,
                whether it's through portraits, landscapes, or creative
                projects. My work reflects my dedication to storytelling and an
                eye for detail.
              </p>
              <p>
                As a On *YouTube*, I host live streams that combine my love for
                technology, creativity, and interaction. From tutorials to
                behind-the-scenes content, I enjoy connecting with audiences
                worldwide, sharing knowledge, and building a community of
                like-minded individuals. I’m constantly exploring new ways to
                grow and improve, always open to collaborations and
                opportunities to innovate.
              </p>
              <p>Let’s create something amazing together!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_2;
