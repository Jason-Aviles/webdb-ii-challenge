
exports.up = function(knex) {
  return knex.schema.createTable('cars',tbl=>{
    tbl.increments()
    tbl.string('VIN',128).unique()
    .notNullable();
    tbl.string('make',128)
    .notNullable();
    tbl.string('model',128).unique()
    .notNullable();
    tbl.integer('mileage',128)
    .notNullable()
    tbl.string('transmission_type',128)
    .notNullable()
    tbl.string(' status_of_title',128)
    .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
