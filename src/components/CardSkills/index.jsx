const CardSkills = ({ skill }) => {
  return (
    <div key={skill.id} >
        <div className="flex flex-col items-center p-5  borderh-fit w-[100px] gap-y-2">
          <p style={skill} className="text-7xl">{skill.icon}</p>
          <p className="font-bold ">{skill.skill}</p>
        </div>
    </div>
  );
};

export default CardSkills;
