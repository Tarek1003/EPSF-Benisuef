
import pyramid from "../assets/pyramid.png"
const Structure = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40  font-medium text-2xl py-10  bg-white max-sm:mt-15' id="Structure">
      <div className="flex justify-center items-center gap-10 md:gap-5 sm:gap-5 max-sm:gap-5 md:flex-col-reverse lg:flex-row sm:flex-col-reverse max-sm:flex-col-reverse">
        <div className=""><h2 className="text-primary font-bold pb-1.5">GA (General Assembly)</h2> The highest authority in the association, responsible for major decisions and electing the Executive Board.
<h2 className="text-primary font-bold py-1.5">Executive Board</h2> Leads the association, oversees operations, implements plans, and ensures all activities align with EPSF policies.
<h2 className="text-primary font-bold py-1.5">Members</h2> The foundation of the association, actively participating in projects, events, and community activities while contributing to its growth.
</div>
        <div><img src={pyramid} className="w-500 " /></div>
      
      </div>
      
    </div>
  )
}

export default Structure
