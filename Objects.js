//Empty Objects
var obj={};
console.log(obj);

var obj2=new Object()
console.log(obj2);

var std={
    name:"MJ",
    class:"12-X",
    rollNo:"22",
    "-phone":"67890",
    disPlayType:function()
    {
        return this.name+" "+this.class+" "+this.rollNo+" "+this["-phone"];
    },
    updatingName:function(name)
    {
        this.name=name;
    }
}





console.log("call func on objects ",std.disPlayType());


console.log(std,std["name"],std["school"]);

std["school"]="AIS";

console.log(std,std["school"],std["-phone"]);


console.log("call func on objects "+std.updatingName("Manjari"),std.name);



//Iterating over object

for(var prop in std)
{
    console.log(prop,std[prop]);
}

//Keys
var keys=Object.keys(std);
console.log("keys ",keys);

var keys2=Object.getOwnPropertyNames(std);
console.log("keys access part 2",keys2);

console.log(delete std["marks"]);

console.log(delete std["-phone"]);

console.log(std);

var obj3={"name":"obj3"};
var obj4=obj3;

console.log(obj4);

obj4["occuptaion"]="musician";

console.log(obj3);

console.log(obj3==obj4,obj3===obj4);

var obj5={
    "name":"obj3"
}

console.log(obj5==obj3);


//Difference btw arrays and objects

var ar=[1,2,3,4,5];
var arObj={
    "0":1,
    "1":2,
    "2":3,
    "3":4,
    "4":5
}

console.log(typeof(arr),typeof(arObj));

console.log(ar.length,arObj.length);

for(j in arObj)
{
    console.log(j,arObj[j]);
}

arObj["prop"]="demo";
ar["prop"]="demo";

console.log(arObj);
console.log(ar);

console.log(arObj.length);
console.log(ar.length); // maximum integeral index +1

for(let j in ar)
{
    console.log(j,ar[j]);
}