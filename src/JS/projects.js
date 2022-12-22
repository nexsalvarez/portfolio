const agencyProjects = document.querySelector('.agency-projects-container');
const personalProjects = document.querySelector('.personal-projects-container');
const dataProjects = document.querySelector('.data-projects-container');

class Project {
    constructor (work, name, date, img, type, description, url) {
        this.work = work;
        this.name = name;
        this.date = date;
        this.img = img;
        this.type = type;
        this.description = description;
        this.url = url;
    }
    createProject () {
        let newProject = document.createElement('div');
        newProject.classList.add('project-card')

        let view = `<div class="project-card">
        <picture>
        <img src="${this.img}" alt="${this.name}">
        </picture>
        <p class="project--type">${this.type}</p>
        <h3 class="project--title">${this.name}</h3>
        <p class="project--description">${this.description} <span class="project--date">${this.date}</span></p>
        <a href="${this.url}" target="_blank" class="project--url">Observa el proyecto</a>
        </div>`
        let newViewProject = function () {
            return newProject.innerHTML = view;
        };

        if (this.work == 'Agency') {
            return agencyProjects.innerHTML = newViewProject();
        } else if (this.work == 'Personal') {
            return personalProjects.innerHTML = newViewProject();
        } else if (this.work == 'Data') {
            return dataProjects.innerHTML = newViewProject();
        } else {
            return console.log("Tipo de proyecto inválido");
        }
    }
}