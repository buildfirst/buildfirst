module.exports = flow;

function flow (generator) {
  // we create an iterator on the provided generator,
  // passing it our `next` method.
  var iterator = generator(next);

  // the iterator is suspended by default,
  // so we need to jump-start it.
  next();

  // we take an optional error argument, and a result value
  function next (err, result) {
    // if an error was raised, then have the generator throw
    if (err) {
      iterator.throw(err);
    }

    // unsuspend execution of the generator,
    // and execute it up until the next `yield` instruction,
    // or to completion if there isn't anything else to `yield`.
    var item = iterator.next(result);

    // are we done iterating on the generator?
    if (item.done) {
      return;
    }

    // if a function was yielded, invoke it,
    // passing it `next`
    if (typeof item.value === 'function') {
      item.value(next);
    }

    // if something other than a function was yielded, then
    // we count on the consumer calling `next`,
    // which was passed to the generator earlier,
    // back when we did `iterator = generator(next)`.
  }
}
