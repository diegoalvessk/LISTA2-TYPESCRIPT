let arrayA: string[] = []
let arrayB: string[] = []
let arrayC: string[] = []

function Elementos(arrayString: string[]) {

            arrayA = arrayString[0].split(",")
            arrayB = arrayString[1].split(",")
            console.log(arrayA)
            console.log(arrayB)

            for (let index2 = 0; index2 < arrayA.length; index2++) {

                for (let index = 0; index < arrayB.length; index++) {

                    if (arrayA[index2] == arrayB[index]) {
                        arrayC.push(arrayA[index2])
                    }
                }
            }
            let concatenar: string = ("")
            for (let index = 0; index < arrayC.length; index++) {
                if(index == 0){
                    concatenar = arrayC[index]
                }else{
                    concatenar = concatenar + "," + arrayC[index] 
                }  
            }
            
            if (arrayC.length == 0) {
                return "false"
            }else{
                return concatenar
            }
}