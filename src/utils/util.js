


function curry (fn) {
  const c = (...args) => (args.length === fn.length) ?
          fn(...args) : (..._args) => c(...args, ..._args)
  return c
}

export {
  curry,
}