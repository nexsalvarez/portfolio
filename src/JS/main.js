const spanTitle = document.querySelector('#words');
const agencyButton = document.querySelector('#agency-button');
const personalButton = document.querySelector('#personal-button');
const dataButton = document.querySelector('#data-button');
const agencyProjects = null || document.querySelector('.agency-projects-container');
const personalProjects = null || document.querySelector('#personal-projects-id');
const dataProjects = null || document.querySelector('#data-projects-id');

const wordsTitle = ["nexsalvarez", "developer", "data analyst", "Nestor", "front-end"];
let wordsTitleContent = spanTitle.innerHTML;
let addingWord = false;
let counter = 1;

setInterval (function() {
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
    
}, 150);


function viewAgencyProjects() {
  let filterAgency = projects.filter(project => project.work == 'Agency');

  let workAgency = `
    ${filterAgency.map(project => 
      `<div class="project-card">
      <picture>
      <img src="${project.img}" alt="${project.name}">
      </picture>
      <p class="project--type work-wp">${project.type}</p>
      <h3 class="project--title">${project.name}</h3>
      <p class="project--description">${project.description} <span class="project--date">${project.date}</span></p>
      <a href="${project.url}" target="_blank" class="project--url">Observa el proyecto</a>
      </div>
    `).join(' ')}
  `;
  
  return agencyProjects.innerHTML = workAgency;
}

viewAgencyProjects();

function viewPersonalProjects() {
  let filterPersonal = projects.filter(project => project.work == 'Personal');

  let workPersonal = `
    ${filterPersonal.map(project => 
      `<div class="project-card">
      <picture>
      <img src="${project.img}" alt="${project.name}">
      </picture>
      <p class="project--type work-code">${project.type}</p>
      <h3 class="project--title">${project.name}</h3>
      <p class="project--description">${project.description} <span class="project--date">${project.date}</span></p>
      <a href="${project.url}" target="_blank" class="project--url">Observa el proyecto</a>
      </div>
    `).join(' ')}
  `;
  
  return personalProjects.innerHTML = workPersonal;
}

function viewDataProjects () {
  let filterData = projects.filter(project => project.work == 'Data');

  let workData = `
    ${filterData.map(project => 
      `<div class="project-card">
      <picture>
      <img src="${project.img}" alt="${project.name}">
      </picture>
      <p class="project--type work-data">${project.type}</p>
      <h3 class="project--title">${project.name}</h3>
      <p class="project--description">${project.description} <span class="project--date">${project.date}</span></p>
      <a href="${project.url}" target="_blank" class="project--url">Observa el proyecto</a>
      </div>
    `).join(' ')}
  `;

  return dataProjects.innerHTML = workData;
}


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