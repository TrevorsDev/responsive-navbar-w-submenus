const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const menuItems = document.querySelectorAll("nav ul li a");

// Toggle mobile menu when clicking hamburger
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

// Highlight clicked menu item
menuItems.forEach(item => {
  item.addEventListener("click", function() {
    // Remove active class from all links
    menuItems.forEach(link => link.classList.remove("active"));
    // Add active class to the clicked item
    this.classList.add("active");
  });
});
