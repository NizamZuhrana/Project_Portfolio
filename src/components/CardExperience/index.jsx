import Card from "@mui/material/Card";

const CardExperience = ({ Experience, style}) => {
  return (
    <div key={Experience.id} className="">
      <Card style={style} className="flex items-start justify-center gap-20 p-5 w-fit drop-shadow-xl">
        <div className="flex flex-col items-center gap-2 ">
          <img src={Experience.image} alt="" className="w-[150px] h-[150px] rounded-full " />
          <p className="font-bold w-52 ">{Experience.company} </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="font-bold ">{Experience.jobTitle}</p>
          <ul className="flex flex-col items-start justify-start gap-2 text-justify list-disc">
            {Experience.jobDesc.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>{Experience.Date}</p>
        </div>
      </Card>
    </div>
  );
};

export default CardExperience;
