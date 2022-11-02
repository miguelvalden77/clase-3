
// for of -> arrays

let perros = ["Illita", "Ternasco", "Salchicha", "Franco"]

for(let per of perros){
    console.log(per)
}

// for(let i = 0; i < perros.length; i++){
//     console.log(perros[i])
// }

// Math.floor() / Math.ceil() / Math.round()

let number = 6.7
let floor_number = Math.floor(number)
console.log(floor_number)

let ceil_number = Math.ceil(number)
console.log(ceil_number)

let round_number = Math.round(number)
console.log(round_number)

// Math.random()

let random_num = Math.random()*10
console.log(random_num)

let rounded_num = Math.round(random_num)
console.log(rounded_num)

// Ejercicio

let objetos = ["Silla", "Mesa", "Cuchara", "Tenedor", "Nevera"]

const randomObject = (array)=>{

    // 1. Conseguir numero de elementos
    let elements = array.length

    // 2. Conseguir un numero al azar
    let random_number = Math.random() * elements
   
    // 3. Redondeamos a la baja el numero al azar
    let round_num = Math.floor(random_number)
    
    // 4. Conseguimos el elemento al azar con el numero de indice al azar
    let random_element = array[round_num]

    return random_element
}

console.log(randomObject(objetos))

// .toFixed() -> Recibe como parámetro el número de decimales que va a tener

let numero = 7.834323
let fixNumber = numero.toFixed(4)
console.log("fixed ", fixNumber)

// .includes() -> 

let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis sapiente esse dolor sint illo praesentium ipsa, dolorem delectus similique, maxime distinctio laboriosam ex inventore unde. Nostrum sequi iusto itaque?"

let verificador = texto.includes("itaque")

console.log("includes ", verificador)


// Ejercicios

// .includes()
    // 1. Haz una función que reciba dos parámetros: un string con texto y un string con el/los caracteres que se quieran comprobar si están dentro del texto. La función debe devolver true si se encuentra y false si no.
    let text = "Esta tarde ha llovido demasiado"

    const includeChar = ()=>{
        
    }

// .toFixed()
    // 2. Haz una función que reciba dos parámetros: El primero será un numero cualquiera, y el segundo el número de decimales que quermos devolver.
    // Parámetros: 5.84478, 2 -> return: 5.84

    const fixDecimals = ()=>{

    }

// Math.ceil() / Math.floor() / Math.round()
    // 3. Haz una función que reciba dos parámetros: uno un número con decimales, y el segundo un string que solo puede ser "down", "up" o "round". Si es "down" el número introducido se redondeará hacia abajo, si es "up" lo hará hacia arriba y si es "round" hacia el numero entero más cercano
    // Parámetros: 3.58, "down" -> return 3
    // Parámetros: 3.58, "up" -> return 4
    // Parámetros: 3.58, "round" -> return 4

    const aproxNumber = ()=>{

    }

// Math.random()
    // 4. Haz una función que reciba un parámetro: un número. La función debe devolver un número al azar entre 0 y el número indicado por parámetro.
    // Parámetro: 8 -> return: 5.673

    const randomNum = ()=>{

    }

    // 5. Haz una función que reciba un array de personas y cada vez que se ejecute la función devuelva uno de los nombres.
    
    const amigos = ["Laura", "Antonio", "Pepe", "Luis", "Alberta"]

    const randomFriend = ()=>{

    }

// every / some
    // 6. Haz una función que reciba un array y devuelva "Perfecto" si todos sus elementos son iguales y "Hay un intruso" si hay alguno desigual

    const checker = ()=>{

    }


module.export = {
    checker,
    randomFriend,
    randomNum,
    aproxNumber,
    fixDecimals,
    includeChar
}