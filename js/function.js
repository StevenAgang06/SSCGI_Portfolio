document.addEventListener("DOMContentLoaded", () => {
  let nav = document.querySelector(".navBurg");
  let dropdown = document.getElementsByTagName("nav");
  let links = document.getElementsByClassName("link");
  nav.addEventListener("click", () => {
    dropDown(dropdown[0]);
  });
  for (let link of links) {
    link.addEventListener("click", () => {
      compress(dropdown[0]);
    });
  }
});

// function rootClick(e, dropdown, nav) {
//   console.log(e);
//   if (e.target != dropdown || e.target != nav) {
//     // dropdown.classList.remove("dropdown");
//     console.log("clicked");
//   }
// }

function compress(element) {
  element.classList.remove("dropdown");
}

function dropDown(element) {
  if (element.classList.contains("dropdown")) {
    element.classList.remove("dropdown");
  } else {
    element.classList.add("dropdown");
  }
}
