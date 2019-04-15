
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        //user 1's workouts
        { id: 1, workout: 'Leg Day', date: "04-12-2019", user_id: 1 },
        { id: 2, workout: 'Chest & Tri\s', date: "04-13-2019", user_id: 1 },
        { id: 3, workout: 'Shoulders & Bi\s', date: "04-14-2019", user_id: 1 },
        //user 2's workouts
        { id: 4, workout: 'Leg Day', date: "04-12-2019", user_id: 2 },
        { id: 5, workout: 'Chest & Tri\s', date: "04-13-2019", user_id: 2 },
        { id: 6, workout: 'Shoulders & Bi\s', date: "04-14-2019",  user_id: 2 },
        //user 3's workouts
        { id: 7, workout: 'Leg Day', date: "04-12-2019", user_id: 3 },
        { id: 8, workout: 'Chest & Tri\s', date: "04-13-2019", user_id: 3 },
        { id: 9, workout: 'Back & Bi\s', date: "04-14-2019",  user_id: 3 }
      ]);
    });
};
