//=============================ObjectDestruction=========================================================
//Declare mult() function that will multiply values of the x,y,z fields of the passed object

var obj = {
  x: 5,
  y: 20,
  z: 3
};

function mult0(object) {
  var { x, y, z } = object;
  // var x = object.x;
  // var y = object.y;
  // var z = object.z;
  return x * y * z;
}

//OR

function mult1({ x, y, z }) {
  // var x = object.x;
  // var y = object.y;
  // var z = object.z;
  return x * y * z;
}
console.log(mult1(obj)); // output ==> 300
console.log(mult0(obj)); // output ==> 300
