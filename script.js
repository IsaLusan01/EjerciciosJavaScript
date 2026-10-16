// rl significa el nombre de la constante
//importar el módulo readline para leer datos desde
const readline = require("readline");

//Crear la interfaz de entrada y salida
const rl = readline.createInterface({
    input: process.stdin, // Entrada: teclado
    output: process.stdout // Salida: consola
});

//Utilizar la constante para solicitar el nombre del cliente 
rl.question("Ingrese el nombre del cliente: ", (cliente) => {

    //Solicitar el nombre del producto
    rl.question("Ingresar el nombre del producto: ", (producto) => {

        //Solicitar la cantidad comprada
        rl.question("Ingrese la cantidad comprada: ", (cantidad) => {

            //Solicitar el precio unitario del producto
            rl.question("Ingrese el precio unitario: ", (precioUnitario) => {

                //Convertir la cantidad ingresada a número entero
                cantidad = parseInt(cantidad);

                //Convertir el precio ingresado a número decimal
                precioUnitario = parseFloat(precioUnitario);

                //Calcular el total a pagar
                let total = cantidad * precioUnitario;

                //Mostrar el resumen de la compra
                console.log("\n--- RESUMEN DE LA COMPRA ---");
                console.log(`Cliente: ${cliente}`);    
                console.log(`Has comprado ${cantidad} ${producto},`); 
                console.log(`El precio de cada producto es S/ ${precioUnitario},`); 
                console.log(`El total a pagar es S/ ${total},`);

                //Cerrar la interfaz readline para finalizar el programa
                rl.close();
            })
        })

    })
})
