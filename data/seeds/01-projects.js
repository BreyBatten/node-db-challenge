
exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { name: 'Node Sprint Challenge', description: "Hard, but fun!", completed: true },
    { name: 'Project2', description: "My fake portfolio website", completed: false }
  ]);
};
