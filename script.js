// Show the "People" tab by default
document.getElementById("defaultOpen").click();

// Function to switch between tabs
function openTab(evt, tabName) {
  // Hide all tab content
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from all buttons
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Fetch data for People
const peopleList = document.getElementById('people-list');
fetch('https://my-json-server.typicode.com/your-username/your-repo/people')
  .then(response => response.json())
  .then(people => {
    people.forEach(person => {
      const personDiv = document.createElement('div');
      personDiv.className = 'person';
      personDiv.innerHTML = `
        <img src="${person.photo}" alt="${person.name}">
        <h3>${person.name}</h3>
        <p>${person.bio}</p>
        <p><strong>Skills:</strong> ${person.skills.join(', ')}</p>
      `;
      peopleList.appendChild(personDiv);
    });
  });

// Fetch data for Projects
const projectsList = document.getElementById('projects-list');
fetch('https://my-json-server.typicode.com/your-username/your-repo/projects')
  .then(response => response.json())
  .then(projects => {
    projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project';
      projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Owner:</strong> ${project.owner}</p>
        <p><strong>Skills Needed:</strong> ${project.skills_needed.join(', ')}</p>
      `;
      projectsList.appendChild(projectDiv);
    });
  });
