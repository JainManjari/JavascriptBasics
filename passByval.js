/**
 *  function is directly called by passing variables as the arguments, so any changes made inside the func
 *  doesnt effect the variables
 * 
 * 
 * 
 * 
 */


function swap(a,b)
{
    let temp=a;
    a=b;
    b=temp;
    console.log("inside func "+a+" "+b);
}

var a=20;
var b=30;

console.log("before calling func "+a+" "+b);

swap(a,b);


console.log("after callin func "+a+" "+b);




//pass by reference

/**
 * 
 *   func is directly called by passing the references or address of the variables as the arguements. So, any changes made by the func
 *   affects them outside the func.
 * 
 *   arrays and Objects followed pass by reference 

 */



function swapObj(obj)
{
    let temp=obj.a;
    obj.a=obj.b;
    obj.b=temp;
    console.log("pass by refer inside func "+obj.a+" "+obj.b);
}

let obj={
    a:20,
    b:30
}


console.log("pass by refer before calling func "+obj.a+" "+obj.b);

swapObj(obj);


console.log("pass by refer after callin func "+obj.a+" "+obj.b);






function swapArr(arr)
{
    let temp=arr[0];
    arr[0]=arr[1];
    arr[1]=temp;
    console.log("pass by refer inside func "+arr[0]+" "+arr[1]);
}

let arr=[20,30];


console.log("pass by refer before calling func "+arr[0]+" "+arr[1]);

swapArr(arr);


console.log("pass by refer after callin func "+arr[0]+" "+arr[1]);