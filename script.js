// This is for the people tab.
const peopleList = document.getElementById('people-list');
if (peopleList) {
  fetch('https://my-json-server.typicode.com/sierraobryan/we-lead-cs-people/people/db')
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
}

// This is for the projects tab.
const projectsList = document.getElementById('projects-list');
if (projectsList) {
  fetch('https://my-json-server.typicode.com/sierraobryan/we-lead-cs-projects/db')
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
}
