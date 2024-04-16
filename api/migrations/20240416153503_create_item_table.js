/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('item_info', (table) => {
        table.increments('id');
        table.integer('UserId');
        // table.foreign('UserId').references(user_info.id);
        table.string('Item Name', 200);
        table.string('Description', 300);
        table.integer('Quantity', 20);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    // return knex.schema.alterTable('item_info', table => {
    //     table.dropForeign('UserId')
    //     })
    //     .then(function() {
            return knex.schema.dropTableIfExists('item_info');
        // });
};
