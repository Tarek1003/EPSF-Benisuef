import epsfHistory from "../components/epsfHistory";
import history from "../assets/history.jpeg";
import { useState } from "react";
const History = () => {
  const [selected, setSelected] = useState(epsfHistory[0]);
  return (
    <div>
      <div className='relative w-full'>
        <img src={history} className='w-full h-auto ' alt='' />
        <div className='text-white md:font-extrabold sm:font-bold lg:text-3xl md:text-2xl sm:text-xl max-sm:text-sm text-center absolute inset-0 p-8 flex items-center justify-center'>
          "As you read these words, feel the weight and the grandeur of every
          single moment gathered here, drawn from everyone who has ever been
          part of this entity and who helped carry it to where it stands today.
          They reached this greatness through work born from the heart."
        </div>
      </div>
      <div className='px-4 sm:px-12 lg:px-24 xl:px-40 py-10' id='History'>
        <div className='mt-10 '>
          <div className='flex gap-8 flex-wrap justify-center items-center '>
            {epsfHistory.map((e) => (
              <button
                className='block w-25 h-15 text-medium rounded-full  border-2 border-primary hover:bg-primary hover:text-white' key={e.id}
                onClick={() => setSelected(e)}>
                {e.date}
              </button>
            ))}
          </div>
          <div className='text-center font font-medium md:text-lg max-sm:text-base border-2 border-primary mt-10 p-7 rounded-2xl bg-white shadow-2xl'>
            <h2 className='font-bold'>{selected.title}</h2>
            <div className='text-primary mb-3.5'>{selected.date}</div>
            <div>{selected.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
