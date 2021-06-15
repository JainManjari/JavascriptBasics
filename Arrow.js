function Person(personName)
{
    this.personName=personName;
    console.log("func "+this.personName);  // => Person obj

    setTimeout(function()
    {
        console.log("sto "+this.personName); // window obj
    },1000);
}

var p=new Person("Batman");



// function Person(personName)
// {
//     this.personName=personName;
//     console.log("func "+this.personName);  // => Person obj

//     setTimeout(()=>
//     {
//         console.log("sto "+this.personName); // Person obj => arrow func has no binding, its take the binding of its outer env
//     },1000);
// }

// var p=new Person("Batman");