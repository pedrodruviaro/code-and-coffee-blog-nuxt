import { months } from "@/constants/monthLabels"

export function getMonthLabel(value: string) {
  const valueToNumber = Number(value)
  const rightMonth = valueToNumber - 1

  return months[rightMonth]
}
