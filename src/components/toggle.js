function menuToggle() {
  const menu = document.querySelector("#menu");
  console.log(menu);

  const sidebar = document.querySelector(".nav_resp");

  menu.addEventListener("click", function () {
    sidebar.classList.toggle(".show-nav");
  });
}

export default menuToggle;
