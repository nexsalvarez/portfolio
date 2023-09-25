const spanTitle = document.querySelector('#words');
const agencyButton = document.querySelector('#agency-button');
const personalButton = document.querySelector('#personal-button');
const dataButton = document.querySelector('#data-button');
const personalProjects = null || document.querySelector('.personal-projects-container');
const agencyProjects = null || document.querySelector('#agency-projects-id');
const dataProjects = null || document.querySelector('#data-projects-id');
const welcomeContainer = document.querySelector('.welcome-container');
const projectsContainer = document.querySelector('.projects-container');
const typesProjectsContainer = document.querySelector('.types-projects-container');
const skillsContainer = document.querySelector('.skills-container');
const techContainer = document.querySelector('.tech-container');
const techKnowledge = document.querySelector('.tech-knowledge');
const techScroll = techKnowledge.scrollWidth;
const footer = document.querySelector('footer');

const wordsTitle = ["nexsalvarez", "data analyst", "developer"];
let wordsTitleContent = spanTitle.innerHTML;
let addingWord = false;
let counter = 1;
let isActive = false;
let intervalActive = false;

const titleSec = document.querySelector('#welcome-sec');

const isVisible = () => {
  const rect = titleSec.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

let interval;

const changeWords = () => {
  if (isActive && isVisible()) {
    if(wordsTitleContent.length > 0 && !addingWord) {
      spanTitle.innerHTML = wordsTitleContent.slice(0, -1);
      wordsTitleContent = spanTitle.innerHTML;
    } else {
      addingWord = true;
    }

    if(addingWord) {
      if(wordsTitleContent.length < wordsTitle[counter].length) {
        spanTitle.innerHTML = wordsTitle[counter].slice(0, wordsTitleContent.length +1);
        wordsTitleContent = spanTitle.innerHTML;
      } else {
        if(counter < wordsTitle.length) {
          counter ++;
        }
        addingWord = false;
      }
    }

    if(counter == wordsTitle.length) {
      counter = 0;
    }
  }
};

changeWords();

window.addEventListener('visibilitychange', () => {
  isActive = titleSec.hidden === false;
  if (isActive && !intervalActive) {
    interval = setInterval(changeWords, 150);
    intervalActive = true;
  } else if (!isActive && intervalActive) {
    clearInterval(interval);
    intervalActive = false;
  }
});

const loadElements = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    } else {
      entrada.target.classList.remove('visible');
    }
  });
};

const observer = new IntersectionObserver(loadElements);

const targets = document.querySelectorAll('.show-on-scroll');
targets.forEach((target) => {
  observer.observe(target);
});

const observadorD = new IntersectionObserver (loadElements, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.2
});

observadorD.observe(welcomeContainer);

const observador = new IntersectionObserver (loadElements, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.2
});

observador.observe(projectsContainer);
observador.observe(skillsContainer);
observador.observe(techContainer);
observador.observe(footer);

function viewPersonalProjects() {
  let filterPersonal = projects.filter(project => project.work == 'Own');

  let workPersonal = `
    ${filterPersonal.map(project => 
      `<div class="project-card">
      <picture>
      <source media="(min-width: 720px)" srcset="${project.img}">
      <img src="${project.mobile}" alt="${project.name}">
      </picture>
      <p class="project--type ${project.class}">${project.type}</p>
      <h3 class="project--title">${project.name}</h3>
      <p class="project--description">${project.description} <span class="project--date">${project.date}</span></p>
      <a href="${project.url}" target="_blank" class="project--url">Look at the project</a>
      </div>
    `).join(' ')}
  `;
  
  return personalProjects.innerHTML = workPersonal;
}

viewPersonalProjects();

function viewAgencyProjects() {
  let filterAgency = projects.filter(project => project.work == 'Costumer');

  let workAgency = `
    ${filterAgency.map(project => 
      `<div class="project-card">
      <picture>
      <source media="(min-width: 720px)" srcset="${project.img}">
      <img src="${project.mobile}" alt="${project.name}">
      </picture>
      <p class="project--type">${project.type}</p>
      <h3 class="project--title">${project.name}</h3>
      <p class="project--description">${project.description} <span class="project--date">${project.date}</span></p>
      <a href="${project.url}" target="_blank" class="project--url">Look at the project</a>
      </div>
    `).join(' ')}
  `;
  
  return agencyProjects.innerHTML = workAgency;
}

function viewDataProjects () {
  let filterData = projects.filter(project => project.work == 'Website');

  let workData = `
    ${filterData.map(project => 
      `<div class="project-card">
      <picture>
      <source media="(min-width: 720px)" srcset="${project.img}">
      <img src="${project.mobile}" alt="${project.name}">
      </picture>
      <p class="project--type ${project.class}">${project.type}</p>
      <h3 class="project--title">${project.name}</h3>
      <p class="project--description">${project.description} <span class="project--date">${project.date}</span></p>
      <a href="${project.url}" target="_blank" class="project--url">Look at the project</a>
      </div>
    `).join(' ')}
  `;

  return dataProjects.innerHTML = workData;
}


function createButtonProjects () {
  const btn = document.createElement('div');
  const enlace = document.createElement('a');
  const icon = document.createElement('i');

  icon.classList.add('fi');
  icon.classList.add('fi-rr-arrow-small-up');

  enlace.appendChild(icon);
  enlace.setAttribute('href', '#box-btn');

  btn.appendChild(enlace);
  btn.classList.add('project-button--ancla');
  btn.setAttribute('id', 'projects-ancla');

  return typesProjectsContainer.appendChild(btn);
}

createButtonProjects();

const buttonProjectsAncla = document.querySelector('#projects-ancla');

agencyButton.addEventListener('click', () => {
  personalProjects.classList.replace('personal-projects-container', 'inactive');
  dataProjects.classList.replace('data-projects-container', 'inactive');
  agencyProjects.classList.replace('inactive', 'agency-projects-container');
  viewAgencyProjects();
  personalButton.classList.remove('active-btn');
  dataButton.classList.remove('active-btn');
  agencyButton.classList.add('active-btn');
});
personalButton.addEventListener('click', () => {
  agencyProjects.classList.replace('agency-projects-container', 'inactive');
  dataProjects.classList.replace('data-projects-container', 'inactive');
  personalProjects.classList.replace('inactive', 'personal-projects-container');
  viewPersonalProjects();
  agencyButton.classList.remove('active-btn');
  dataButton.classList.remove('active-btn');
  personalButton.classList.add('active-btn');
});
dataButton.addEventListener('click', () => {
  agencyProjects.classList.replace('agency-projects-container', 'inactive');
  personalProjects.classList.replace('personal-projects-container', 'inactive');
  dataProjects.classList.replace('inactive', 'data-projects-container');
  viewDataProjects();
  agencyButton.classList.remove('active-btn');
  personalButton.classList.remove('active-btn');
  dataButton.classList.add('active-btn');
});


function isElementInViewport (tech) {
  let rect = tech.getBoundingClientRect();
  return rect.right > 0 && rect.left < window.innerWidth;
}

window.addEventListener('load', () => {
  self.setInterval (() => {
    const first = document.querySelector('.tech-knowledge img');

    if(!isElementInViewport(first)){
      techKnowledge.appendChild(first);
      techKnowledge.scrollTo(techKnowledge.scrollLeft - first.offsetWidth, 0);
     }
    if (techKnowledge.scrollLeft !== techScroll) {
      techKnowledge.scrollTo(techKnowledge.scrollLeft + 1, 0);
    }
  }, 15);
});