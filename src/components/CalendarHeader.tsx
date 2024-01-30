import cx from "clsx"

export type CalendarHeaderProps = {
  className?: string
}

export default function CalendarHeader(props: CalendarHeaderProps) {
  const { className } = props
  return (
    <div
      className={cx(className, "h-[42px] bg-white border-b grid grid-cols-7")}>
      {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
        <div
          key={day}
          className="h-[42px] border-r border-b grid items-center justify-center">
          {day}
        </div>
      ))}
    </div>
  )
}
