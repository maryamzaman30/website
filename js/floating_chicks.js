// Select the container element where all the chicks will be placed
const chicksContainer = document.querySelector('.chicks');

// Define how many chicks will be created
const chickCount = 100;

// Loop to create the specified number of chicks
for (let i = 0; i < chickCount; i++) 
{
    // Create a new <div> element for each chick
    const chick = document.createElement('div');
    
    // Add the 'chick' class to the new <div> to apply styles (e.g., shapes, animations)
    chick.classList.add('chick');
    
    // Set a random width for the chick between 30px & 90px
    chick.style.width = `${Math.random() * 60 + 30}px`;
    
    // Set the height of the chick to be the same as the width, making it a square
    chick.style.height = chick.style.width;
    
    // Position the chick randomly within the height of the window
    chick.style.top = `${Math.random() * window.innerHeight}px`;
    
    // Position the chick randomly within the width of the window
    chick.style.left = `${Math.random() * window.innerWidth}px`;
    
    // Set a random animation duration between 3 & 8 seconds to make each chick "float" at different speeds
    chick.style.animationDuration = `${Math.random() * 5 + 3}s`;
    
    // Append the new chick <div> to the container so it will appear on the page
    chicksContainer.appendChild(chick);
}