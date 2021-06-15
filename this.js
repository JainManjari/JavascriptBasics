//without using 'use strict'

// function demo()
// {
//     console.log(this); //window obj
// }

// demo();

// var demo2=function()
// {
//     console.log(this);//window obj
// }

// demo2();

// var obj={
//     "name":"mj",
//     "print":function()
//      {
//          console.log(this); //obj obj
//      }
// }

// obj.print();







// with using 'use strict'
'use strict'
function demo(a,b)
{
    console.log("demo "+this+" "+a+" "+b); //undefined
}

demo();

var demo2=function()
{
    console.log("demo2 "+this);//undefined
}

demo2();

var obj={
    "name":"mj",
    "print":function()
     {
         console.log("obj "+this); //obj obj
     }
}

obj.print();

//to bind functions to default this value

//demo.apply(obj);

//demo.call(obj);

//if func has parameters
demo.apply(obj,[3,4]);
//demo.call(obj,3,4);