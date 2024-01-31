// @ts-check

/**
 * 用 methods chaining 讓 functional 實現類似 class decorator 效果,
 * args[0] 固定為 meta object, 可以在 before / after 的 callback 塞值傳遞
 */
export const createHooks = (fn) => {
  const befCallbacks = []; // 蒐集 onBefore cb
  const aftCallbacks = []; // 蒐集 onAfter cb
  const meta = {}; // hook 內部傳值用媒介

  const wrapper = function (...args) {
    befCallbacks.forEach((cb) => cb(meta, ...args));
    const result = fn(meta, ...args);
    aftCallbacks.forEach((cb) => cb(meta, ...args));

    return result;
  };
  wrapper.onBefore = function (cb) {
    befCallbacks.push(cb);
    return this;
  };
  wrapper.onAfter = function (cb) {
    aftCallbacks.push(cb);
    return this;
  };

  return wrapper;
};
