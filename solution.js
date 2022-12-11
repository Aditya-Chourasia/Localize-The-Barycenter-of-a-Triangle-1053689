function barTriang(p1, p2, p3){
  let xa = p1[0]
  let ya = p1[1]
  
  let xb = p2[0]
  let yb = p2[1]
  
  let xc = p3[0]
  let yc = p3[1]
  
  let xo = (xa + xb + xc)/3
  let yo = (ya + yb + yc)/3
  
  let arr = [];
  arr.push(parseFloat(xo.toFixed(4)));
  arr.push(parseFloat(yo.toFixed(4)));
  return arr;
}
