let score=33;
console.log(typeof score);
console.log(typeof(score));

score="33";
console.log(typeof score);
console.log(typeof(score));

let newscore=Number(score);
console.log(typeof newscore);
console.log(newscore);

score="33avbs";
let new1score=Number(score);
console.log(typeof new1score);
console.log(new1score);
score=null;
let new2score=Number(score);
console.log(typeof new2score);
console.log(new2score);
 score='undefine';
let new3score=Number(score);
console.log(typeof new3score);
console.log(new3score);
score=true;
let new4score=Number(score);
console.log(typeof new4score);
console.log(new4score);


