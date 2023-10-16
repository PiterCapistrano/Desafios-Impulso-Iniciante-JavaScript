var n = parseInt(gets());

for (let i=0;i<n;i++) {
  var c = parseFloat(gets());
  
var dias = 0;
  while ( c > 1 ) {
    c = c / 2.0;
    dias++;
  }
  print(`${dias}  dias`);
}