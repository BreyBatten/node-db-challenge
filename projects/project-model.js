const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findResourceById,
    findTasks,
    add,
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
        .where({id})
        .first();
}

function findResourceById(id) {
    return db('resources')
        .where({id})
        .first();
}

function findTasks(project_id) {
    return db('tasks')
        .join('projects')
        .select('tasks.id', 'projects.name', 'tasks.description', 'tasks.notes', 'tasks.completed')
        .where({project_id});
}

async function add(project) {
    const [id] = await db('projects').insert(project);
    return findById(id);
}