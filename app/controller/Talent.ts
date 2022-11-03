import * as express from "express";
import * as projectService from "../service/ProjectService";
import {Project} from '../model/Project'
import * as nodeCache from "node-cache";

const router = express.Router();
const myCache = new nodeCache();

router.get("/get-all-projects", async (req, res) => {
    var projects = await projectService.getAllProjects();
  res.render("list-all-projects", { projects: projects });
});
router.get('/add-project', async (req,res) => {
  res.render('addproject')
})

router.post('/add-project', async (req,res) =>{
  var formData = req.body
  var Project: Project = {
    projectId: 0,
    projectName: formData.projectName,
    projectDescription: formData.projectDescription
  }
  await projectService.addProject(Project)
  res.redirect('list-all-projects')
})

module.exports = router
