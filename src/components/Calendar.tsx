import cx from "clsx"

export type CalendarProps = {
  className?: string
}

export default function Calendar(props: CalendarProps) {
  const { className } = props
  return (
    <div className={cx(className, "grid grid-cols-7")}>
      {[31, 1, 2, 3, 4, 5, 6].map((e) => {
        return (
          <div
            key={e}
            className="h-[42px] border-r border-b grid items-center justify-center bg-white">
            <span className="text-base font-bold text-[#2a2a2a]">{e}</span>
          </div>
        )
      })}
    </div>
  )
}
