const buttonNao = document.querySelector("#nao");
const buttonSim = document.querySelector("#sim");
const texto = document.querySelector("[data-texto]");

let buttonNaoPosition = buttonNao.getBoundingClientRect();
const telaX = window.innerWidth;
const telaY = window.innerHeight;

const eventListPC = ["mouseover", "touchstart"];
const eventListCel = ["click", "touchstart"];

eventListPC.forEach((userEvent) => {
  buttonNao.addEventListener(userEvent, () => {
    let newX = Math.random() * telaX;
    let newY = Math.random() * telaY;

    if (newX > telaX - 50) {
      newX -= 50;
    } else if (newX < 50) {
      newX += 50;
    }

    if (newY > telaY - 50) {
      newY -= 50;
    } else if (newY < telaY - 50) {
      newY += 50;
    }

    buttonNao.style.position = "absolute";
    buttonNao.style.left = newX - 50 + "px";
    buttonNao.style.top = newY + "px";
  });
});

eventListCel.forEach((event) => {
  buttonSim.addEventListener(event, () => {
    texto.classList.add("ativo");
  });
});
