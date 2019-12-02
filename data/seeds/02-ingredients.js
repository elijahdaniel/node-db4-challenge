exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'ketchup' },
        { name: 'milk' },
        { name: 'coco puffs' },
        { name: 'heavy cream' },
        { name: 'hamburger bun' },
        { name: 'hamburger patty' },
        { name: 'cheese' },
        { name: 'hotdog' },
        { name: 'hotdog bun' }
      ])
    })
}
