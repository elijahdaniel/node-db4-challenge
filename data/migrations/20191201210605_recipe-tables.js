exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl.string('stint').notNullable()
      tbl.string('servings').notNullable()
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
    })
    .createTable('recipe', tbl => {
      tbl.increments()
      tbl
        .integer('recipe_id')
        .references('id')
        .inTable('recipes')
      tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
      tbl.unique(['recipe_id', 'ingredient_id'])
    })
    .createTable('instructions', tbl => {
      tbl.increments()
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
      tbl.string('instruction').notNullable()
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe')
    .dropTableIfExists('instructions')
}
