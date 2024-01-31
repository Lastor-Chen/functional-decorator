// @ts-check
// client usage example
import { createHooks } from './createHooks.js'

// create hook functions
const createSomeing = (meta) => {
  console.log('createSomeing');
  const instance = { name: 'classA' };
  meta.instance = instance;
};
const befB = () => console.log('bef B');
const aftA = () => console.log('aft A');
const aftB = () => console.log('aft B');

// main API object
const api = {
  methodA: createHooks(({ instance }, arg1, arg2) => {
    console.log('methodA main process...', [arg1, arg2]);
    console.log(instance.name);
    return 'valA';
  })
    .onBefore(createSomeing)
    .onBefore(befB)
    .onAfter(aftA)
    .onAfter(aftB),
};

const result = api.methodA('arg1', 'arg2');
console.log({ result })
