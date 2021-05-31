const body = document.querySelector("body");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const counter = document.querySelector(".counter");
const msg = document.querySelector(".msg");
const number = document.querySelector("#number");
const btn = document.querySelector("#btn");

let count = 0;

const maxWidth = window.matchMedia("(max-width: 500px)");

const fadeOut = function () {
  setTimeout(() => {
    msg.style.opacity = 0;
  }, 3000);
};

increase.addEventListener("click", function () {
  if (msg) {
    msg.style.opacity = 0;
  }
  count++;
  counter.textContent = count;
});

decrease.addEventListener("click", function () {
  if (count === 0) {
    msg.style.opacity = 100;
    fadeOut();
    return;
  }
  count--;
  counter.textContent = count;
});

//////////////

btn.addEventListener("click", function () {
  let x = Number(number.value);
  if (maxWidth.matches) {
    if (x > 9999) {
      msg.style.opacity = 100;
      msg.textContent = "Can't go above 9999";
      fadeOut();
    } else {
      counter.textContent = count = count + x;
    }
  } else if (x > 9999999) {
    msg.style.opacity = 100;
    msg.textContent = "Can't go above 9999999";
    fadeOut();
  } else {
    counter.textContent = count = count + x;
  }
});

/////////////

increase.addEventListener("mouseover", function () {
  counter.style.border = "1px solid #f15223";
});

decrease.addEventListener("mouseover", function () {
  counter.style.border = "1px solid #f15223";
});

increase.addEventListener("mouseout", function () {
  counter.style.border = "1px solid #2d9e64";
  console.log("ok");
});

decrease.addEventListener("mouseout", function () {
  counter.style.border = "1px solid #2d9e64";
});
