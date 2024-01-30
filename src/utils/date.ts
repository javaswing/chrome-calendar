
export const genDayList = (start:Date, end: Date, firstDayOfWeek:number) => {
    const startYear = start.getFullYear();
    const startMonth = start.getMonth()
    const endYear = end.getFullYear()
    const endMonth = end.getMonth()

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month+1, 9).getDate()
    }

    const list:Date[] = []
    


    return list;
}