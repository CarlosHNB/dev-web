
let array_values = [40, 100, 1, 5, 25, 10];

let temp = 0;

for(let i = 0; i < array_values.length; i++){
    for(let j = 0; j < array_values.length; j++){
        if(array_values[i] < array_values[j]){
            temp = array_values[i];
            array_values[i] = array_values[j];
            array_values[j] = temp;
        }
    }
}

console.log(array_values);