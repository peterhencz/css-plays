const change = () => {
  console.log("kiscica");
};

const button = document.querySelector(".circle");
button.addEventListener("click", _ => button.classList.toggle("clicked"));
