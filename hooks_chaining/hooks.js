// @ts-check
// create some hooks

export const createInstance = (meta) => {
  console.log('createInstance')
  const instance = { name: 'classA' }
  meta.instance = instance
}

export const befB = () => console.log('bef B')

export const aftA = () => console.log('aft A')

export const aftB = () => console.log('aft B')
