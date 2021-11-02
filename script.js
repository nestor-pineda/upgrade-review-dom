// 1.1 Basandote en el array siguiente, crea una lista ul > li  dinámicamente en el html que imprima cada uno de los paises.

let createUl = document.createElement("ul");

document.body.appendChild(createUl);

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let list = document.querySelector("ul");

countries.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let myBody = document.body;
let removeElement = document.querySelector("p.fn-remove-me");

myBody.removeChild(removeElement);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const list2 = document.querySelector("[data-function=printHere]");

cars.forEach((car) => {
  let li2 = document.createElement("li");
  li2.innerText = car;
  list2.appendChild(li2);
});

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento  h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (let i of countries2) {
  let myDivs = document.createElement("div");
  let myBody2 = document.body;
  myBody2.appendChild(myDivs);

  let count = i.title;
  let image = i.imgUrl;
  myDivs.innerHTML = `<h4>${count}</h4><br><img src="${image}" alt="img">`;
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último  elemento de la lista.

const button = document.createElement("button");
button.innerHTML = "BORRAR";
const buttonPlace = document.body;
buttonPlace.appendChild(button);

const myLastChild = document.querySelectorAll("div");

button.addEventListener("click", () => {
  document.body.removeChild(myLastChild).lastChild;
});
