let column_1 = [5, 1, 2, 6, 7, 6, 4, 10, 6, 5, 10, 3, 10, 7, 4, 4, 3, 9, 6, 10, 3, 1, 1, 10, 7, 4, 4, 2, 5, 7];
let column_2 = [2, 1, 2, 5, 6, 5, 9, 10, 3, 3, 4, 8, 3, 9, 9, 2, 9, 4, 6, 4, 9, 1, 10, 10, 8, 5, 4, 6, 5, 10]
let column_3 = [44, 46, 45, 74, 66, 83, 56, 65, 58, 85, 66, 54, 84, 48, 72, 68, 85, 92, 49, 82, 97, 81, 61, 63, 93, 94, 88, 55, 58, 83]
let column_4 = [98, 90, 52, 52, 93, 59, 88, 92, 58, 62, 41, 47, 82, 69, 45, 64, 58, 57, 85, 76, 97, 79, 82, 90, 87, 79, 59, 70, 74, 57]
let sum_1 = 0;
for (i = 0;i<column_1.length;i++){
    sum_1 = sum_1 + column_1[i];
}
console.log ("Sum =" + sum_1)


let sum_2 = 0;
for (i = 0;i<column_2.length;i++){
    sum_2 = sum_2 + column_2[i];
}
console.log ("Sum =" + sum_2)


let sum_3 = 0;
for (i = 0;i<column_3.length;i++){
    sum_1 = sum_3 + column_3[i];
}
console.log ("Sum =" + sum_3)

let sum_4 = 0;
for (i = 0;i<column_4.length;i++){
    sum_4 = sum_4 + column_4[i];
}
console.log ("Sum =" + sum_4)


let sums = [sum_1, sum_2, sum_3, sum_4]
let total = sum_1 + sum_2 + sum_3 + sum_4
console.log("Total sum: " + total)

const result = {
    column1: column_1;
    column2: column_2;
    column3: column_3;
    column4: column_4;
    sumTotal : sums;
    total : total;
}
console.log (result)