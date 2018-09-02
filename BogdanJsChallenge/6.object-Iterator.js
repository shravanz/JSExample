//=========================Object Iterator=======================
var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};
//Object.prototype.new = 500;
function sumOfObjectValues(obj) {
  var total = 0;
  //forIn loop use to iterate object keys
  for (let k in obj) {
    // console.log(k); //Output--> a,b,c,d
    // console.log(obj[k]); //Output --> 10,20,string,12

    if (typeof obj[k] === "number") {
      total += obj[k];
    }
  }
  return total;
}

console.log(sumOfObjectValues(nums));
//Output --> 42
