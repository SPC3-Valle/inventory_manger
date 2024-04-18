/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE user_info CASCADE')
  await knex('user_info').del()
  await knex('user_info').insert([
    {id: 1, First_Name: 'John', Last_Name: 'Doe', Username: 'UnknownPasserby', Password: 'password'},
    {id: 2, First_Name: 'Davey', Last_Name: 'Jones', Username: 'LockerMaster82', Password: '123456'},
    {id: 3, First_Name: 'Mary', Last_Name: 'Sue', Username: 'Perfectionist41', Password: 'qwerty'}
  ]);
};
