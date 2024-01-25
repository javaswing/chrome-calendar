import { useState } from "react"

import "~style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="plasmo-w-[300px]">
      <h2>这里是日历</h2>
    </div>
  )
}

export default IndexPopup
