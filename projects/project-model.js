const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findTasks,
    add
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
        .where({id})
        .first();
}

function findTasks(project_id) {
    return db('tasks')
        .join('projects', 'name', 'tasks.project_id')
        .select('tasks.id', 'projects.name', 'tasks.description')
        .where({project_id});
}

async function add(project) {
    const [id] = await db('projects').insert(project);
    return findById(id);
}