
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable();
        tbl.string('description')
        tbl.boolean('completed')
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description')
            .notNullable();
        tbl.string('notes');
        tbl.boolean('completed');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable();
        tbl.string('description')
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id');
        tbl.integer('resources_id')
            .unsigned()
            .notNullable()
            .references('resources.id');
        tbl.primary(['project_id', 'resources_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
