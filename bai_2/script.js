const main = document.querySelectorAll(".car-main");
const one = document.querySelectorAll(".boder-one");
const two = document.querySelectorAll(".boder-two");
const tree = document.querySelectorAll(".boder-tree");
const four = document.querySelectorAll(".boder-four");
console.log(one, two, tree, four);
one.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(1);
    main.forEach((item) => {
      if (!item.classList.contains("none")) {
        item.classList.add("none");
      }
    });
    main[0].classList.remove("none");
  });
});
two.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(2);
    main.forEach((item) => {
      if (!item.classList.contains("none")) {
        item.classList.add("none");
      }
    });
    main[1].classList.remove("none");
  });
});
tree.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(3);
    main.forEach((item) => {
      if (!item.classList.contains("none")) {
        item.classList.add("none");
      }
    });
    main[2].classList.remove("none");
  });
});
four.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(4);
    main.forEach((item) => {
      if (!item.classList.contains("none")) {
        item.classList.add("none");
      }
    });
    main[3].classList.remove("none");
  });
});
