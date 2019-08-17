exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { project_id: 1, description: "Had to build it from scratch", notes: "built my confidence", completed: false },
    { project_id: 2, description: "Using React to build it", notes: "using React MDL has been valuable", completed: false }
  ]);
};
