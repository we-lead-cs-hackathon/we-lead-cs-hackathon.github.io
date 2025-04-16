# Hackathon Ideas Website

Welcome to the **Hackathon Ideas Website** repository! This project serves as a collaborative platform where participants can view hackathon project ideas and profiles of participants. The website is designed to help students connect with hackathon projects and explore various opportunities.

## Repository Structure

This project is split across three repositories:

1. **Website Repository** (this repository): Contains the core files for the website (HTML, CSS, JavaScript) and handles the display of the data.
2. **People Data Repository**: Contains the JSON data of people (participants) and their profiles.
3. **Projects Data Repository**: Contains the JSON data of hackathon project ideas.

## Data Sources

The website pulls data from two separate JSON files hosted on Github using [My JSON Server](https://my-json-server.typicode.com/), a fake online REST server for teams. This data is used to display participant profiles and project details on the website.

### 1. **People Data**

The **People** data is stored in a JSON file that contains details about the participants, including their names, bios, photos, skills, and interests. 

**Data Source:**
- The People data is served from the [People JSON Repository](https://github.com/sierraobryan/we-lead-cs-people).

**Example Data Structure:**

```json
{
  "name": "Alice Johnson",
  "bio": "A passionate developer with a love for creating web applications.",
  "photo": "https://example.com/photos/alice.jpg",
  "skills": ["HTML", "CSS", "JavaScript", "React"],
  "interests": ["Web Development", "UI/UX Design"],
  "location": "New York"
}
```

### 2. **Projects Data**

The **Projects** data contains information about available hackathon projects, including the title, description, owner, skills needed, and status.

**Data Source:**
- The Projects data is served from the [Projects JSON Repository](https://github.com/sierraobryan/we-lead-cs-projects).

**Example Data Structure:**

```json
{
  "title": "Hackathon Website",
  "description": "A website that helps students find and join hackathon projects.",
  "owner": "Alice Johnson",
  "skills_needed": ["HTML", "CSS", "JavaScript"],
  "status": "open"
}
```

### Data Fetching

Both data sources are fetched using JavaScript's `fetch()` API from their respective JSON files. This allows the website to dynamically display the list of people and projects.

Here’s an example of how the data is fetched in `script.js`:

```
// Fetch People Data
fetch('https://my-json-server.typicode.com/your-username/your-repo/people')
  .then(response => response.json())
  .then(people => {
    // Process and display People data
  });

// Fetch Projects Data
fetch('https://my-json-server.typicode.com/your-username/your-repo/projects')
  .then(response => response.json())
  .then(projects => {
    // Process and display Projects data
  });
```

## How to Set Up the Project Locally

To set up the website locally on your machine, follow these steps:

### 1. Clone the Repository
Clone the website repository to your local machine:

```bash
git clone https://github.com/we-lead-cs-hackathon/we-lead-cs-hackathon.github.io.git
cd we-lead-cs-hackathon.github.io
```

### 2. Open the `index.html` File
Since this is a static website, you can open the `index.html` file directly in your browser:

```
open index.html
```

Or you can use any local server if you prefer to test with server-side features (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code).

### 3. Ensure Data is Available
The website fetches the People and Projects data from their respective repositories hosted on My JSON Server. If you’re running the website locally, make sure your browser can access the following endpoints:

- [People JSON Endpoint](https://my-json-server.typicode.com/sierraobryan/we-lead-cs-people/people)
- [Projects JSON Endpoint](https://my-json-server.typicode.com/sierraobryan/we-lead-cs-projects/projects)


## Contributing

Feel free to contribute to the project by adding more participants, projects, or features. Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Open a pull request.

---
