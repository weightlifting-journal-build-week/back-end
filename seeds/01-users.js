
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          fullname: 'Master Yoda', 
          email: "master@jedicouncil.com", 
          username: 'flippySlashSlash', 
          password: 'green',
          height: 36,
          weight: 80
        },
        {
          id: 2, 
          fullname: 'Ben Kenobi', 
          email: "imyouronlyhope@bomb.com", 
          username: 'youwerethechosenone', 
          password: 'blue',
          height: 72,
          weight: 215
        },

        {
          id: 3, 
          fullname: 'Mace Windu', 
          email: "ihateanakin@darth.com", 
          username: 'ireallyhateanakinalot', 
          password: 'purple',
          height: 76,
          weight: 225
        }
      ]);
    });
};
