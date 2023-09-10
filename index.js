function receivesAFunction(cb) {
  cb();
}

function returnsANamedFunction() {
  const cb = () => {}
  return cb;
}

function returnsAnAnonymousFunction() {
  return function() {}
}