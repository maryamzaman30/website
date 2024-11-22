// Function to toggle the menu when the button is clicked
function toggleMenu() 
{
    // Select the button with the class 'labeled-menu-button'
    const labeledMenuButton = document.querySelector('.labeled-menu-button');
    
    // Select the <nav> element with the class 'menu'
    const menu = document.querySelector('nav.menu');
    
    // Toggle the 'active' class on the labeled menu button to trigger animation
    labeledMenuButton.classList.toggle('active');
    
    // Toggle the 'show' class on the menu to make it visible or hidden
    menu.classList.toggle('show');
}