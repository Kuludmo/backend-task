
const { get } = require("mongoose");
const projectService = require("../services/ProjectService");
    

async function getall(req,res){
    const projects = await projectService.getAllProjects();
    res.json(projects);
}

async function getone(req, res) {
    const project = await projectService.getProjectById(id);
    res.json(project);
}

async function create(req, res) {
    const project = await projectService.addProject(req.body);
    res.json(project);
}
async function update(req, res) {
    const project= await projectService.updateProject(req.params.id, req.body);
    res.json(project);
}

async function remove(req, res) {
    await projectService.deleteProject(req.params.id);
    res.json({ message: "Project deleted successfully" });
}

module.exports = {
    getall, getone, create, update, remove
};
