
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        //user 1's workouts
        { id: 1, name: 'Leg Day', date: "04-12-2019", user_id: 1 },
        { id: 2, name: 'Chest & Tri\s', date: "04-13-2019", user_id: 1 },
        { id: 3, name: 'Shoulders & Bi\s', date: "04-14-2019", user_id: 1 },
        //user 2's workouts
        { id: 4, name: 'Leg Day', date: "04-12-2019", user_id: 2 },
        { id: 5, name: 'Chest & Tri\s', date: "04-13-2019", user_id: 2 },
        { id: 6, name: 'Shoulders & Bi\s', date: "04-14-2019",  user_id: 2 },
        //user 3's workouts
        { id: 7, name: 'Leg Day', date: "04-12-2019", user_id: 3 },
        { id: 8, name: 'Chest & Tri\s', date: "04-13-2019", user_id: 3 },
        { id: 9, name: 'Back & Bi\s', date: "04-14-2019",  user_id: 3 }
      ]);
    });
};
