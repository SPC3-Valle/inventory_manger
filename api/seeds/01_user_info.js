/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE user_info CASCADE')
  await knex('user_info').del()
  await knex('user_info').insert([
    {id: 1, 'First Name': 'John', 'Last Name': 'Doe', Username: 'UnknownPasserby', Password: 'password'},
    {id: 2, 'First Name': 'Davey', 'Last Name': 'Jones', Username: 'LockerMaster82', Password: '123456'},
    {id: 3, 'First Name': 'Mary', 'Last Name': 'Sue', Username: 'Perfectionist41', Password: 'qwerty'}
  ]);
};
