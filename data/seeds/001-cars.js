exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
  .truncate()

    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "JDOWJD2832049",
          make: "BMW",
          model: "2013",
          mileage: "239,40349",
          transmission_type: "cool",
          status_of_title: "clean"
        }
      ]);
    });
};
