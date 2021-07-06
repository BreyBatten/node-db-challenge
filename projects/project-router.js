const express = require('express');

const Projects = require('./project-model.js');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const projects = (await Projects.find()).map(project => {
            return {
                ...project,
                completed: project.completed === 0 ? false : true
            }
        })
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Projects.findById(id);

        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ message: 'Could not find project with that id' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to get projects' });
    }
});

router.get('/:id/resources', async (req, res) => {
    const { id } = req.params;
    try {
        const resources = await Projects.findResourceById(id);
        if (resources) {
            res.json(resources);
        } else {
            res.status(404).json({ message: 'Could not find those resources' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to get resources' });
    }
});

router.get('/:id/tasks', async (req, res) => {
    const { id } = req.params;

    try {
        const tasks = (await Projects.findTasks(id)).map(task => {
            return {
                ...task,
                completed: task.completed === 0 ? false : true
            }
        })
        if (tasks) {
            res.json(tasks);
        } else {
            res.status(404).json({ message: 'Could not retrieve tasks for this project' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to get tasks' });
    }
})

router.post('/', async (req, res) => {
    const projectData = req.body;

    try {
        const project = await Projects.add(projectData);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create new project' });
    }
});

router.post('/:id/resources', async (req, res) => {
    const resourceData = req.body;

    try {
        const resource = await Projects.addResource(resourceData);
        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create new resource' });
    }
});

router.post('/:id/tasks', async (req, res) => {
    const taskData = req.body;

    try {
        const task = await Projects.addTask(taskData);
        res.status(201).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to create new task' });
    }
});

module.exports = router;