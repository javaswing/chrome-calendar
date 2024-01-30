import cx from "clsx"

export type CalendarHeaderProps = {
  className?: string
}

export default function CalendarHeader(props: CalendarHeaderProps) {
  const { className } = props
  return (
    <div
      className={cx(
        className,
        "relative h-[58px] border-b border-[#e1e1e1] flex items-center overflow-hidden px-3"
      )}>
      <span className="text-base font-bold text-[#2a2a2a]">2024年01月</span>
      <div className="flex-1">
        <select>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
      <button className="bg-[#1da1f2] text-white inline-flex px-2.5 py-2 font-medium rounded-md items-center text-sm space-x-3">
        回到今天
      </button>
    </div>
  )
}
