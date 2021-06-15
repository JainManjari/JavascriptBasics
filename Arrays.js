var a=[1,2,3,4];

console.log(a[9],a[2],a[-1],a["str"],a[0.6]);
console.log("a size "+a.length);
console.log("joining a1 ",a.join());
console.log(typeof(a));

var a1=new Array(1,"",null,"string",undefined,"heloo");
console.log(a1[9],a1[2],a1[-1],a1["str"],a1[0.6]);
console.log("a1 size "+a1.length);
console.log("a1 "+a1);
a1.sort();
console.log("after sorting a1 "+a1);

//empty array
var e1=[];
var e2=new Array();

//with size
var e3=new Array(3); // size of 3

e3.push(10);
e3.push(11);
e3.push(12);
e3.push(13);

console.log(e3);

console.log(e3.pop());

console.log(e3);

e3.reverse();
console.log(e3);

e3.shift();
console.log("after shifting e3 ",e3);

e3.unshift();
console.log("after unshifting e3",e3);

console.log(e3.unshift(12));
console.log("after unshifting e3 with element 12",e3);

console.log(e3.indexOf("hello"),e3.indexOf(10));
