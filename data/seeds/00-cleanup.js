
const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {

  console.log('cleaning!');
  
  try {
    await knex.truncate('project_resources');
    await knex.truncate('resources');
    await knex.truncate('tasks');
    await knex.truncate('projects');

  } catch (err) {
    console.log(err);
  }
  
};
