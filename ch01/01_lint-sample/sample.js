function compose_ticks_count (start) {
  start || start = 1;
  this.counter = start;
  return function (time) {
    ticks = +new Date;
    return ticks + '_'  + this.counter++
  }
}
