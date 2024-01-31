import { createHooks, createInstance, befB, aftA, aftB } from './hooks_chaining/index.js'
import { decorate, decoratorA, decoratorB } from './decorative/index.js'

const api = {
  methodA: createHooks(({ instance }, arg1, arg2) => {
    console.log('methodA process...', [arg1, arg2])
    console.log(instance.name)
    return 'valA'
  })
    .onBefore(createInstance)
    .onBefore(befB)
    .onAfter(aftA)
    .onAfter(aftB),
  methodB: decorate(
    decoratorA,
    decoratorB,
    ({ instance }, arg1, arg2) => {
      console.log('methodB process...', [arg1, arg2])
      console.log(instance.name)
      return 'valB'
    }
  )
}

console.log('invoke methodA by hooks:')
console.log(api.methodA('arg1', 'arg2'))

console.log('\ninvoke methodB by decorators:')
console.log(api.methodB('arg1', 'arg2'))
