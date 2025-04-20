// JavaScript for Dynamic Project Rendering
// Array of project objects, each representing a project with its details
const projects = [
  {
    title: "Databases and Advanced Data Techniques - Web Application",
    date: "Sep 2024 - Jan 2025",
    association: "University of London",
    description: "Created a Web app for visualizing student mental health data, stats, and correlations with academics and lifestyle.",
    skills: "EJS, CSS, MySQL, Node.js",
    video: "videos/mental-health.mp4",
    link: "https://github.com/maryamzaman30/Mental-Health-Dashboard-Web-App"
  },
  {
    title: "Natural Language Processing - Text Classification",
    date: "Sep 2024 - Jan 2025",
    association: "University of London",
    description: "Created a fake news detector using Logistic Regression & BiLSTM, evaluated by accuracy & F1-score.",
    skills: "Text Classification, Machine Learning, Data Preprocessing",
    pdf: "pdfs/text-classification.pdf",
    link: "https://github.com/maryamzaman30/Natural-Language-Processing-University-of-London-text-classification"
    
  },
  {
    title: "Agile Software Development - Web Application",
    date: "Mar 2024 - Sep 2024",
    association: "University of London",
    description: "Note-taking app built by a team using HTML, CSS, Node.js and SQLite3.",
    skills: "Project Management, Node.js, SQLite3, HTML, CSS",
    video: "videos/back-end-web-app.mp4",
    link: "https://github.com/maryamzaman30/Agile-Software-Development-University-of-London-Web-App"
    
  },
  {
    title: "Graphics Programming - Image Processing Application",
    date: "Jul 2024 - Sep 2024",
    association: "University of London",
    description: "Image processing app with filters using p5.js and face detection.",
    skills: "JavaScript, Graphic Design, p5.js",
    pdf: "pdfs/image-processing-app.pdf",
    link: "https://github.com/maryamzaman30/Graphics-Programming-Final-University-of-London-Image-processing-application"
  },
  {
    title: "Databases, Networks and the Web - Web Application",
    date: "Mar 2024 - Jul 2024",
    association: "University of London",
    description: "Back-end Blogging website for single user with author and reader pages.",
    skills: "HTML, CSS, SQLite3, Node.js",
    video: "videos/back-end-blogging-website.mp4",
    link: "https://github.com/maryamzaman30/Databases-Networks-and-the-Web-Midterm-University-of-London-back-end-website"
  },
  {
    title: "Graphics Programming - Snooker Game",
    date: "Mar 2024 - Jul 2024",
    association: "University of London",
    description: "Snooker game with realistic ball movement using p5.js and matter.js.",
    skills: "JavaScript, Game Development, p5.js",
    video: "videos/snooker-game.mp4",
    link: "https://github.com/maryamzaman30/Graphics-Programming-Midterm-University-of-London-Snooker-Game"
  },
  {
    title: "Programming With Data - Heart Failure Prediction",
    date: "Mar 2024 - Jul 2024",
    association: "University of London",
    description: "Data analysis and model building using Python and Jupyter.",
    skills: "Python, Data Analysis, Jupyter, Pandas",
    pdf: "pdfs/heart-failure-prediction.pdf",
    link: "https://github.com/maryamzaman30/Programming-With-Data-Midterm-University-of-London"
  },
  {
    title: "Intro to Programming II - Data Visualization",
    date: "Mar 2023 - Sep 2023",
    association: "University of London",
    description: "Data visualization project using JavaScript and p5 library.",
    skills: "JavaScript, Data Visualization, p5.js",
    video: "videos/data-visualization.mp4",
    link: "https://github.com/maryamzaman30/Data-visualization-final-project-University-of-London"
  },
  {
    title: "Web Development - Individual Website",
    date: "Jul 2023 - Sep 2023",
    association: "University of London",
    description: "Health news and tips front-end website with basic AI therapy.",
    skills: "HTML, CSS, JavaScript, Responsive Design",
    video: "videos/front-end-website-final.mp4",
    link: "https://github.com/maryamzaman30/Web-Development-Final-University-of-London-front-end-website"
  },
  {
    title: "Intro to Programming I - Game Project",
    date: "Oct 2022 - Mar 2023",
    association: "University of London",
    description: "Platform game with character and obstacles using p5.js.",
    skills: "JavaScript, Game Development, p5.js",
    video: "videos/game-project.mp4",
    link: "https://github.com/maryamzaman30/University-of-London-Game-Project"
  }
];

// Function to display all projects on the webpage
function displayProjects() 
{
  // Get the HTML element where the project list will be inserted
  const projectList = document.getElementById("project-list");

  // Loop through each project in the projects array and display it
  projects.forEach((project, index) => {
    // Create a new div element for each project
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project"); // Add a class to style the project div

    // Add project details (title, date, association, description, skills) to the projectDiv
    projectDiv.innerHTML = `
      <h3>${project.title}</h3>  <!-- Project title -->
      <p><strong>Date:</strong> ${project.date}</p>  <!-- Project duration -->
      <p><strong>Association:</strong> ${project.association}</p>  <!-- Association name -->
      <p>${project.description}</p>  <!-- Short project description -->
      <p><strong>Skills:</strong> ${project.skills}</p>  <!-- Skills learned from the project -->
    `;

    // Create a new div to hold buttons like "Preview PDF" or "Preview Video"
    const buttonsContainer = document.createElement("div");

    // Check if the project has a PDF file (for preview)
    if (project.pdf) 
    {
      // Create a button to preview the PDF
      const pdfButton = document.createElement("button");
      pdfButton.className = "preview-pdf-btn"; // Assign a class to style the button
      pdfButton.textContent = "Preview PDF"; // Button label
      pdfButton.dataset.index = index; // Store the project index in the button
      pdfButton.addEventListener("click", () => { // Add an event listener to handle button click
        console.log(`Opening PDF: ${project.pdf}`); // Log to console for debugging
        openPdfModal(project.pdf); // Open the PDF in a modal
      });
      buttonsContainer.appendChild(pdfButton); // Add the PDF button to the buttons container
    }

    // Check if the project has a video file (for preview)
    if (project.video) 
    {
      // Create a button to preview the video
      const videoButton = document.createElement("button");
      videoButton.className = "preview-video-btn"; // Assign a class to style the button
      videoButton.textContent = "Preview Video"; // Button label
      videoButton.dataset.index = index; // Store the project index in the button
      videoButton.addEventListener("click", () => { // Add an event listener to handle button click
        console.log(`Opening Video: ${project.video}`); // Log to console for debugging
        openVideoModal(project.video); // Open the video in a modal
      });
      buttonsContainer.appendChild(videoButton); // Add the video button to the buttons container
    }

    // Create a GitHub link for the project (if provided)
    const githubLink = document.createElement("a");
    githubLink.href = project.link; // Set the link to the project's GitHub repository
    githubLink.textContent = "GitHub Repository"; // Link text
    githubLink.target = "_blank"; // Open link in a new tab

    // Append the buttons container and GitHub link to the project div
    projectDiv.appendChild(buttonsContainer); // Add the buttons container
    projectDiv.appendChild(githubLink); // Add the GitHub link

    // Finally, add the project div to the main project list on the webpage
    projectList.appendChild(projectDiv);
  });
}

// Function to open a PDF in a modal when the "Preview PDF" button is clicked
function openPdfModal(pdfSrc) 
{
  const modal = document.getElementById("pdf-modal"); // Get the modal element
  const pdfViewer = document.getElementById("pdf-viewer"); // Get the PDF viewer element

  pdfViewer.src = pdfSrc; // Set the source of the PDF viewer to the selected PDF
  modal.style.display = "flex"; // Show the modal by setting display to "flex"
}

// Function to close the PDF modal when the user is done viewing the PDF
function closePdfModal() 
{
  const modal = document.getElementById("pdf-modal"); // Get the modal element
  const pdfViewer = document.getElementById("pdf-viewer"); // Get the PDF viewer element

  pdfViewer.src = ""; // Clear the PDF source to stop it from displaying
  modal.style.display = "none"; // Hide the modal by setting display to "none"
}

// Function to open a video in a modal when the "Preview Video" button is clicked
function openVideoModal(videoSrc) 
{
  const modal = document.getElementById("video-modal"); // Get the modal element
  const video = document.getElementById("project-video"); // Get the video element

  video.src = videoSrc; // Set the source of the video to the selected video
  modal.style.display = "flex"; // Show the modal by setting display to "flex"
  video.play(); // Start playing the video
}

// Function to close the video modal when the user is done watching the video
function closeVideoModal() 
{
  const modal = document.getElementById("video-modal"); // Get the modal element
  const video = document.getElementById("project-video"); // Get the video element

  video.pause(); // Pause the video
  video.src = ""; // Clear the video source to stop it from playing
  modal.style.display = "none"; // Hide the modal by setting display to "none"
}

// Initialize the projects and display them when the page loads
window.onload = displayProjects;