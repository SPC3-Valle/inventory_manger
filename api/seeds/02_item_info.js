/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item_info').del()
  await knex('item_info').insert([
    {id: 1, UserId: 1, 'Item Name': 'Frisbee', Description: 'Toy for amusement', Quantity: 1},
    {id: 2, UserId: 2, 'Item Name': 'Rake', Description: 'Toool for cleaning leaves', Quantity: 2},
    {id: 3, UserId: 2, 'Item Name': 'Broom', Description: 'Tool for cleaning floor', Quantity: 5}
  ]);
};
