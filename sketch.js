var student={
  name:"monish",
  class:7,
  roll_number:21,
  favorite_subject:"maths",
  marks:[45,50,46,41,47]
};

function setup(){
createCanvas(400,400);
console.log(student.roll_number);
student.roll_number=19
console.log(student.roll_number);
}

function draw(){
  background("white");
}