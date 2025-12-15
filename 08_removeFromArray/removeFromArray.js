const removeFromArray = function(array,numberofthings) {
 let arpa=[];
 for(let i=0; i<array.length;i++){
    if(!numberofthings.includes(array[i])){
        arpa.push(array[i]);
    }
 }
 return arpa;
}

// Do not edit below this line
module.exports = removeFromArray;
