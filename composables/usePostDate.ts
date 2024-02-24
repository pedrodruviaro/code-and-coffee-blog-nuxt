export function usePostDate(postDate: string | Ref | ComputedRef) {
  const formatedDate = toValue(postDate)

  const date = computed(() => {
    const [year, month, day] = formatedDate.split("-")

    return `${day} ${getMonthLabel(month)}. ${year}`
  })

  return { date }
}
