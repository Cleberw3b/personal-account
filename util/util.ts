export const throttle = (func: (...args: any) => any, delay: number) => {
  let inProgress = false
  return (...args: any) => {
    if (inProgress)
    {
      return
    }
    inProgress = true
    func(...args) // Consider moving this line before the set timeout if you want the very first one to be immediate
    setTimeout(() => {
      inProgress = false
    }, delay)
  }
}
