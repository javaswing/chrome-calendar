import cx from "clsx"

export type CalendarProps = {
  className?: string
}

export default function Calendar(props: CalendarProps) {
  const { className } = props
  return (
    <div className={cx(className, "grid grid-cols-7")}>
      <div>Calendar</div>
    </div>
  )
}
