exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Cereal', stint: '2 minutes', servings: '1' },
        { name: 'Ice Cream', stint: '60 minutes', servings: '4-5' },
        { name: 'Hamburger', stint: '30 minutes', servings: '10' },
        { name: 'Hot Dog', stint: '15 minutes', servings: '10' }
      ])
    })
}
