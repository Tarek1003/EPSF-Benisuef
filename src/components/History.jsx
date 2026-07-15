import logo from "../assets/logo.jpg"
import epsfHistory from '../components/epsfHistory'
const History = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-10" id="History">
      <div className="">
        <img src={logo} className="rounded-full mx-auto w-1/4" />
        <div className="mx-auto mt-7 font-bold text-center text-xl max-sm:text-sm border-b-2 border-gray-400 pb-10">      "EPSF-BeniSuef (Egyptian Pharmaceutical Students' Federation – Beni Suef University) is a non-governmental, non-political, non-religious national organization leading the call among pharmacy students to improve public health, through information, education, communication, and a wide range of publications and activities dedicated to pharmacy. It is a member of the Egyptian Pharmaceutical Students' Federation, which represents Egypt in the International Pharmaceutical Students' Federation and its Eastern Mediterranean regional office. Over the years, EPSF-BeniSuef has been recognized as the 2nd best-performing society in the Federation (2012–2013), the 3rd best (2014–2015), and the 4th best (2016–2017)."
       </div>
        <div className="text-gray-700 pt-5 text-center">      "As you read these words, feel the weight and the grandeur of every single moment gathered here, drawn from everyone who has ever been part of this entity and who helped carry it to where it stands today. They reached this greatness through work born from the heart — work that speaks directly to the heart."
      </div>
    </div>
    <div className="mt-10 ">
      {epsfHistory.map((i)=>(
        <div key={i.id} className="text-center font font-medium text-2xl border-2 border-primary mt-10 p-7 rounded-2xl bg-white shadow-2xl">
          <h2 className="font-bold">{i.title}</h2>
          <div className="text-primary mb-3.5">{i.date}</div>
          <div>{i.description}</div>
        </div>
      ))}
    </div>

    
    </div>
  )
}

export default History
