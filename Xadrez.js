let lines = gets().split("\n");

var l = parseInt(lines[0]);
var c = parseInt(lines[0]);

const color = ((1 + c) % 2 === 0) ? 1 : 0;
print(color);