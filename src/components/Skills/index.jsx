import CardSkills from "../CardSkills";

const Skills = ({ skillsList }) => {
  return (
    <div id="skill" className="px-[80px] py-[96px]  border-t-4 \">
      <div className="flex flex-col items-center justify-center mb-5">
        <div className="p-2 mb-3 font-bold text-center text-white bg-slate-600 rounded-xl w-fit h-fit">
          <p>My Skills</p>
        </div>
        <div>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap text-center gap-x-32 gap-y-12">
          {skillsList.map((skill) => (
            <CardSkills skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
