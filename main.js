// Ordenar los precios de menor a mayor

let productos = [
    {id: 1, nombre: "Polera", precio: 10000, stock: 40},
    {id: 2, nombre: "Pantalon", precio: 25000, stock: 80},
    {id: 3, nombre: "Gorra", precio: 20990, stock: 320},
    {id: 4, nombre: "Vestido", precio: 15000, stock: 4},
    {id: 5, nombre: "Zapatilla", precio: 30000, stock: 5},
];

function Ordenar (a,b) {
    return a.precio - b.precio;
}
productos.sort(Ordenar)
console.log (productos)