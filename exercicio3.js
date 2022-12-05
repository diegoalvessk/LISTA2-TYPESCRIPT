var arrayA = [];
var arrayB = [];
var arrayC = [];
function Elementos(arrayString) {
    arrayA = arrayString[0].split(",");
    arrayB = arrayString[1].split(",");
    console.log(arrayA);
    console.log(arrayB);
    for (var index2 = 0; index2 < arrayA.length; index2++) {
        for (var index = 0; index < arrayB.length; index++) {
            if (arrayA[index2] == arrayB[index]) {
                arrayC.push(arrayA[index2]);
            }
        }
    }
    var concatenar = ("");
    for (var index = 0; index < arrayC.length; index++) {
        if (index == 0) {
            concatenar = arrayC[index];
        }
        else {
            concatenar = concatenar + "," + arrayC[index];
        }
    }
    if (arrayC.length == 0) {
        return "false";
    }
    else {
        return concatenar;
    }
}
