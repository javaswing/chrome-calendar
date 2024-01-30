import { useState } from "react"

import Calendar from "~components/Calendar"
import CalendarHeader from "~components/CalendarHeader"

import "~style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="w-[800px] bg-slate-50 min-h-[100px]">
      <div
        className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        style={{ backgroundPosition: "10px 10px" }}></div>
      <CalendarHeader />
      <Calendar />
    </div>
  )
}

export default IndexPopup
