// @ts-check
// create some decorators

export const decoratorA = (fn) => (...args) => {
  console.log('createInstance')
  const instance = { name: 'classA' }

  const res = fn({ instance }, ...args)
  console.log('aft A')

  return res
}

export const decoratorB = (fn) => (...args) => {
  console.log('bef B')
  const res = fn(...args)
  console.log('aft B')

  return res
}
