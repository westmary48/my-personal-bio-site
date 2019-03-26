const projects = [

{
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/westmary48", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/westmary48"
  },
  {
    title: "Cool Project2",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/westmary48", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/westmary48"
  },
  {
    title: "Cool Project3",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/westmary48", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/westmary48"
  },
  {
    title: "Cool Project4",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/westmary48", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "hhttps://github.com/westmary48"
  },
  {
    title: "Cool Project5",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/westmary48", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/westmary48"
  }
];

  const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const createProjectCards = () => {
    let domString = '';
    for(let i = 0; i < projects.length; i++) {
    domString += `<div class = 'projectsPage'>`
    domString += `<h3>${projects[i].title}</h3> `
    domString += `<img>${projects[i].screenshot}</img> `
    domString += `<h3>${projects[i].description}<h3>`
    domString += `<h3>${projects[i].technologiesUsed}<h3>`
    domString += `<h3>${projects[i].available}<h3>`
    domString += `<a href>${projects[i].url}</a>`
    domString += `<a href>${projects[i].githubUrl}</a>`
    domString += `</div>`;
    // console.log(projects[i].title);
    if (projects[i].available === true) {
        printToDom('projectsPage', domString);
        }
}
// console.log(domString);
};

const addEvents = () => {
  document.getElementById('navToBio').addEventListener('click', function (e) {
     e.preventDefault()
      document.getElementById('technologiesPage').classList.add('hideStuff')
      document.getElementById('projectsPage').classList.add('hideStuff')
      document.getElementById('bioPage').classList.remove('hideStuff')
  })
  document.getElementById('navToTechnologies').addEventListener('click', function (e) {
      e.preventDefault()
      document.getElementById('technologiesPage').classList.add('hideStuff')
      document.getElementById('projectsPage').classList.remove('hideStuff')
      document.getElementById('bioPage').classList.add('hideStuff')
  })
  document.getElementById('navToTechnologies').addEventListener('click', function(e) {
      e.preventDefault()
      document.getElementById('bioPage').classList.add('hideStuff')
      document.getElementById('projectsPage').classList.add('hideStuff')
      document.getElementById('technologiesPage').classList.remove('hideStuff')
  })
}

const init = () => {
    createProjectCards();
    addEvents();
}
init();
