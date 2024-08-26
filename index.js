const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

//a)  Las pizzas que tengan un id impar.

// [A]



const pizzasImpares = pizzas.filter(pizza => pizza.id % 2 !== 0);

pizzasImpares.forEach(pizza => {
  console.log(`Estas son las pizzas con id impar ID: ${pizza.id}, Nombre: ${pizza.nombre}`);
});

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

//[B]

const menorA600 = pizzas.find(pizza => pizza.precio < 600);

if (menorA600) {
  console.log(`La pizza que cuesta menos de $600 es: ${menorA600.nombre} cuesta ${menorA600.precio} pesos`);
} else {
  console.log("No hay ninguna pizza que cueste menos de $ pesos.");
}

//c) El nombre de cada pizza con su respectivo precio.

//[C]

pizzas.forEach(pizza => {
  console.log(`Aqui te mostramos nombres y precios de cada una Pizza: ${pizza.nombre}, Precio: $${pizza.precio}`);
});

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

//[D]


pizzas.forEach(pizza => {
  console.log(`Ingredientes de ${pizza.nombre}:`);

  pizza.ingredientes.forEach(ingrediente => {
    console.log(`- ${ingrediente}`);
  });

});

