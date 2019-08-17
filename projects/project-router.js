const express = require('express');

const Projects = require('./project-model.js');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const projects = await Projects.find();
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

router.get('/:id/tasks', async (req, res) => {
    const { id } = req.params;

    try {
        const tasks = await Projects.findTasks(id);
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

module.exports = router;