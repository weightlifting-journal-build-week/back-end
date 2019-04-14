
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Yoda', password: 'stars'},
        {id: 2, username: 'Kenobi', password: 'stars'},
        {id: 3, username: 'Windu', password: 'stars'}
      ]);
    });
};
