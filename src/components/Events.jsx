import aware from "../assets/aware.png";
import besyn from "../assets/besyn.png";
import recruitment from "../assets/recruitment.png";
const Events = () => {
  return (
    <div className=''>
      <h2 className='font-extrabold pb-5 text-primary text-3xl text-center  '>
        Events
      </h2>
        <img src={recruitment} className='w-40' />
        <img src={aware} className='w-40'/>
        <img src={besyn} className='w-40' />
    </div>
  );
};

export default Events;
