//Argument: [5, 3, 2, 9, 19, 20, 3, 5] First, remove both 3s from the array, then add a 100 to the array.

var numbers= [5, 3, 2, 9, 19, 20, 3, 5]

//defined removing function
cuttingArray =(a,b)=>{
    console.log("Array before splice: "+ numbers);
    var removed =numbers.splice(a,b);
    console.log("You removed: "+ removed);
    console.log("Array after splice: "+ numbers+'\n');   

};
//defined adding function
addingArray =(a)=>{
    console.log("Array before push: "+ numbers);
    numbers.push(a);
    console.log("You added: "+ a);
    console.log("Array after push: "+ numbers+'\n');   

};
cuttingArray(1,1);
cuttingArray(5,1);
addingArray(100);

