import cx from "clsx"

export type WeekDayProps = {
  className?: string
}

export default function WeekDay(props: WeekDayProps) {
  const { className } = props
  return (
    <div
      className={cx(
        className,
        "h-[42px] bg-white border-b border-[#e1e1e1] grid grid-cols-7"
      )}>
      {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
        <div
          key={day}
          className="h-[42px] border-r border-b grid items-center justify-center">
          周{day}
        </div>
      ))}
    </div>
  )
}
