
const projects = require("../data/Projects");


function getNextId() {
    if (projects.length === 0) return 1;
    return Math.max(...projects.map(p => p.id)) + 1;
}


function getAllProjects() {
    return projects;
}


function getProjectById(id) {
    return projects.find(p => p.id === id);
}

function addProject(project) {
    project.id = getNextId();
    projects.push(project);
    return project;
}

function updateProject(id, updatedData) {
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        projects[index] = { ...projects[index], ...updatedData };
        return projects[index];
    }
    return null;
}


function deleteProject(id) {
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        return projects.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    getAllProjects,
    getProjectById,
    addProject,
    updateProject,
    deleteProject
};
