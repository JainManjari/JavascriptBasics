/*

In web development, a polyfill is code that implements a feature on web browsers that do not support the feature. 

*/



let myObj = {
    "name":"Captain",
    "work":"Engineer"
}

let printObj = function () {
    console.log(this.name +" "+ this.work);
}

let printObjBind = printObj.bind(myObj);

printObjBind();


// this myBind2 should be available to all objs of JS, hence using function.prototype
Function.prototype.myBind2 = function(...args) {

    let obj = this;

    return function() {
        obj.call(args[0]);
    }

}


let printObjMyBind= printObj.myBind2(myObj);

printObjMyBind();
