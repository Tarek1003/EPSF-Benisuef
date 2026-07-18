import epsfHistory from "../components/epsfHistory";
const History = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40 py-10' id='History'>
      <div className=''>
        <div className='text-gray-700 pt-5 text-center'>
          {" "}
          "As you read these words, feel the weight and the grandeur of every
          single moment gathered here, drawn from everyone who has ever been
          part of this entity and who helped carry it to where it stands today.
          They reached this greatness through work born from the heart — work
          that speaks directly to the heart."
        </div>
      </div>
      <div className='mt-10 '>
        {epsfHistory.map((i) => (
          <div
            key={i.id}
            className='text-center font font-medium text-2xl border-2 border-primary mt-10 p-7 rounded-2xl bg-white shadow-2xl'>
            <h2 className='font-bold'>{i.title}</h2>
            <div className='text-primary mb-3.5'>{i.date}</div>
            <div>{i.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
