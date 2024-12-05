import CardExperience from "../CardExperience";

const Experience = ({experienceList, style}) => {
    return ( 
        <div className="px-[80px] py-[96px]  border-t-4 ">
      <div className="flex flex-col items-center justify-center mb-5">
        <div className="p-2 mb-5 font-bold text-center text-white bg-slate-600 rounded-xl w-fit h-fit ">
          <p>My Experience</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center text-center gap-x-32 gap-y-12">
            {experienceList.map((experience) => (
                <CardExperience key={experience.id} Experience={experience} style={style}/>
            ))}
        </div>
      </div>
    </div>
     );
}
 
export default Experience;