module.exports = function() {
  return console.log.apply(null, Array.prototype.map.call(arguments, function(item) { return item; }));
}
