const functions = require("./javascript")

describe("Ejercicio 1", ()=>{

    it("Busca correctamente un fragmento o caracter en un string", ()=>{
        expect(functions.includeChar("Hola mundo", "ndo")).toBe(true)
        expect(functions.includeChar("Hola mundo", "ka")).toBe(false)
    })

})

describe("Ejercicio 2", ()=>{

    it("Devuelve el número de decimales indicado en parámetro", ()=>{
        expect(functions.fixDecimals(4.51123, 2)).toBe(4.51)
        expect(functions.fixDecimals(5.79221, 2)).toBe(5.792)
    })

})

describe("Ejercicio 3", ()=>{

    it("Devuelve el número redondeado hacia donde se le indique", ()=>{
        expect(functions.aproxNumber(5.4, "up")).toBe(6)
        expect(functions.aproxNumber(6.9, "down")).toBe(6)
        expect(functions.aproxNumber(6.9, "round")).toBe(7)
    })

})

describe("Ejercicio 4", ()=>{

    it("Devuelve un número al azar entre 0 y el valor indicado como parámetro", ()=>{
        expect(functions.randomNum(5)).toBeLessThan(5)
        expect(functions.aproxNumber(5)).toBeGreaterThan(0)
        expect(functions.aproxNumber(6)).toBeLessThan(6)
    })

})

describe("Ejercicio 5", ()=>{

    it("Devuelve un amigo al azar", ()=>{
        expect(functions.randomFriend(["raul", "miguel", "lara"])).toBe("raul" || "miguel" || "lara")
        expect(functions.randomFriend(["raul", "miguel", "lara"])).toBe("raul" || "miguel" || "lara")
        expect(functions.randomFriend(["raul", "miguel", "lara"])).toBe("raul" || "miguel" || "lara")
    })

})

describe("Ejercicio 6", ()=>{

    it("Checkea que todos los valores sean iguales", ()=>{
        expect(functions.checker([1, 1, 1])).toBe("Perfecto")
        expect(functions.checker([2, 2, 4])).toBe("Hay un intruso")
    })

})
