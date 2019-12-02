exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { recipe_id: 1, instruction: 'Pour coco puffs into bowl' },
        { recipe_id: 1, instruction: 'Pour milk over cereal. Enjoy.' },
        { recipe_id: 2, instruction: 'Wisk hevy cream with blended fruit' },
        { recipe_id: 2, instruction: 'Freeze for 60 minutes. Enjoy.' },
        { recipe_id: 3, instruction: 'Grill hamburger patty' },
        { recipe_id: 3, instruction: 'Grill inside of buns' },
        { recipe_id: 3, instruction: 'Add cheese to patty' },
        { recipe_id: 3, instruction: 'Place patty between buns. Enjoy.' },
        { recipe_id: 4, instruction: 'Grill or boil hot dogs' },
        {
          recipe_id: 4,
          instruction: 'Remove from heated area. Place inside bun'
        },
        { recipe_id: 4, instruction: 'Add ketchup. Enjoy.' }
      ])
    })
}
