import { useState } from "react"

import Calendar from "~components/Calendar"
import CalendarHeader from "~components/CalendarHeader"

import "~style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="relative w-[800px] min-h-[410px] bg-slate-50 overflow-hidden dark:bg-slate-50/25">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      <div className="relative">
        <CalendarHeader />
      </div>
    </div>
  )
}

export default IndexPopup
