import { useContext } from "react"
import {AppContext} from '../context/AppContext'

function MyApointments() {

  const {doctors} = useContext(AppContext)

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>
      <div>
        {
        doctors.slice(0,2).map((item,idx)=>(
          <div className="drid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={idx}>
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address: </p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-1"><span className="text-sm text-neutral-700 font-medium"> Date & Time:</span>25, July, 2024 | 8:30 PM</p>
              </div>
            <div></div>
            <div className="flex justify-center">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 h-8 border hover:bg-primary hover:text-white transition-all duration-300">Cancel appointment</button>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default MyApointments