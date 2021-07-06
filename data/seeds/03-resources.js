
exports.seed = function(knex, Promise) {
  return knex('resources').insert([   
    { name: 'Node Sprint Resources', description: "TK; guided/challenge code; GitHub" },
    { name: 'Project2 Resources', description: "TK; YouTube; SO; VSCode" }
  ]);
};
