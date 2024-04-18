/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user_info', (table) => {
        table.increments('id'),
        table.string('First_Name', 100),
        table.string('Last_Name', 100),
        table.string('Username', 200),
        table.string('Password',200)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_info');
};
