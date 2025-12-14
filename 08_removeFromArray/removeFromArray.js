const removeFromArray = function(array,number) {
 let arpa=[];
 for(let i=0; i<array.length;i++){
    if(array[i]!= number){
        arpa.push(array[i]);
    }
 }
 return arpa;
}

// Do not edit below this line
module.exports = removeFromArray;
