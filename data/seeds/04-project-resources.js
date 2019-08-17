
exports.seed = function(knex, Promise) {
  return knex('project_resources').insert([   
    { project_id: 1, resources_id: 1 },
    { project_id: 2, resources_id: 2 }
  ]);
};
