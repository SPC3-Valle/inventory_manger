/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('item_info', (table) => {
        table.integer('UserId');
        table.foreign('UserId').references(id).inTable(user_info);
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('item_info', table => {
        table.dropForeign('UserId');
      })
};
