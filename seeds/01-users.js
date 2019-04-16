
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
          password: "$2a$10$CY2hDfCGh.DIzsOlA/CqFu6thziQEXdC9bqRA8A43Twucv/k0jP0q",
          height: 36,
          weight: 80
        },
        {
          id: 2, 
          fullname: 'Ben Kenobi', 
          email: "imyouronlyhope@bomb.com", 
          username: 'youwerethechosenone', 
          password: "$2a$10$GI0H6HHMStKGVlS9YtSxjOFttJw2VF9LZ4Mm2e8ufYU3u4yL7ntLm",
          height: 72,
          weight: 215
        },

        {
          id: 3, 
          fullname: 'Mace Windu', 
          email: "ihateanakin@darth.com", 
          username: 'ireallyhateanakinalot', 
          password: "$2a$10$COrLSTDufbAMJOQ/nEEkJ.rPmmYgVcPfC4DEiM/06oBQPRSWVV78O",
          height: 76,
          weight: 225
        }
      ]);
    });
};
