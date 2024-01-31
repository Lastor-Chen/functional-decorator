// @ts-check

export const decorate = (...funcs) => {
  return funcs.reduceRight((decorated, func) => {
    return func(decorated)
  })
}
