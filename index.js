const container = document.querySelector(".container");

function boxes(num) {
  for (let i = 1; i <= num ** 2; i++) {
    const box = document.createElement("div");
    let opacityLever = 0;

    box.classList.add("box");
    const size = 100 / num;
    box.style.width = size + "%";
    box.style.height = size + "%";

    container.appendChild(box);

    box.addEventListener("mouseenter", () => {
      box.classList.add("hovered");
      if (opacityLever < 1) {
        opacityLever += 0.1;
        box.style.opacity = opacityLever;
      }
    });
  }
}

boxes(16);

const btn = document.querySelector(".alert");
btn.addEventListener("click", () => {
  const userInput = prompt("How many boxes? Up to 100");
  let userValue = parseInt(userInput, 10);
  if (isNaN(userValue)) {
    alert("Sorry, this isn't a whole number, setting up default");
    userValue = 16;
    container.innerHTML = "";
    console.log(userValue);
    console.log("Cleared container and calling boxes() function");
    boxes(userValue);
  } else {
    if (userValue > 100) {
      alert("Sorry that was too high, setting up default");
      userValue = 16;
      container.innerHTML = "";
      console.log(userValue);
      console.log("Cleared container and calling boxes() function");
      boxes(userValue);
    } else if (userValue < 1) {
      alert("Sorry that was too low, setting up default");
      userValue = 16;
      container.innerHTML = "";
      boxes(userValue);
    } else {
      container.innerHTML = "";
      boxes(userValue);
    }
  }
});
