//1. Programming Basics
const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];

for (i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}

//2. DOM manipulation
const btn = document.createElement("button");
btn.innerText = "Click me";
document.body.appendChild(btn);
btn.addEventListener("click", (e) => {
  const header = document.createElement("h1");
  header.innerHTML = `Javascript test`;
  document.body.appendChild(header);
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
});

//3. Async API calls
(async function () {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  //   console.log(data);
  const users = await data.data;
  //   console.log(users);
  const firstThree = users.slice(0, 3);
  //   console.log(firstThree);
  firstThree.forEach((user) => {
    const userPar = document.createElement("p");
    userPar.innerHTML = `${user.first_name}`;
    document.body.appendChild(userPar);
  });
})();

//4.Class
class Person {
  constructor(firstname) {
    this.firstname = firstname;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.firstname}`);
  }
}

const peter = new Person("Peter");
peter.sayHello();
