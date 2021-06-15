// var a=10;
// console.log(a,b,c);
// if(a<=10)
// {
//     console.log(b);
//     var b=20;
// }
// else
// {
//     var c=30;
// }

// console.log(a,b,c);




// var a=10;
// //console.log(a,b,c);
// if(a<=10)
// {
//     console.log(b); //error becuz we cant call variables before its definition if we are using "let"
//     let b=20;
// }
// else
// {
//     var c=30;
// }

//console.log(a,b,c);





// for(var i=1;i<=5;i++)
// {
//     console.log(setTimeout(function()
//     {
//         console.log(i); //=> 6,6,6,6,6
//     }),1000);
// }



for(let i=1;i<=5;i++)
{
    console.log(setTimeout(function()
    {
        console.log(i); //=> 1,2,3,4,5
    }),1000);
}
