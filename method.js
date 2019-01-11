var pi = 3.14;
update = () => {
    return "update server";
}
var obj ={};
obj.updatedata = () =>{
    console.log("updatedata");
}
obj.daleteuser =() =>{
    console.log("daleteuser");
}
add  = (a,b) => {
    return a+b;
}
exports.pi=pi;
exports.add=add;
exports.update=update;
exports.data=obj;
