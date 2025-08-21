const project = require("../models/project");

async function getAllProjects() {
    return await project.find();
}

async function getProjectById(id) {
    return await project.findById(id);
}

async function addProject(Data) {
    const newProject = new project(Data);
    return await newProject.save();
}

async function updateProject(id, Data) {
    return await project.findByIdAndUpdate(id, Data, { new: true });
}

async function deleteProject(id) {
    return await project.findByIdAndDelete(id);
}


module.exports = {
    getAllProjects,
    getProjectById,
    addProject,
    updateProject,
    deleteProject
};
