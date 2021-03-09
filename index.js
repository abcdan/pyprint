module.exports = function() {
  /**
  * This magically prints the input
  */
  return console.log.apply(null, Array.prototype.map.call(arguments, function(item) { return item; }));
}
