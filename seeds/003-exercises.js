
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        //Leg Day 
        { id: 1, name: 'Calf Raises', targetArea: 'Calves', workout_id: 1 },
        { id: 2, name: 'Squats', targetArea: 'buns n thighs', workout_id: 1 },
        { id: 3, name: 'Lunges', targetArea: 'Legs', workout_id: 1 },
        //Chest N Tris 
        { id: 4, name: 'Bench Press', targetArea: 'Chest & tri\s', workout_id: 2 },
        { id: 5, name: 'Dips', targetArea: 'tri\s', workout_id: 2 },
        { id: 6, name: 'Push-Ups', targetArea: 'Chest & tri\s', workout_id: 2 },
        //Shoulders and bis
        { id: 7, name: 'Curls', targetArea: 'Bi\s', workout_id: 3 },
        { id: 8, name: 'Shoulder-Presses', targetArea: 'Shoulders & Back', workout_id: 3 },
        { id: 9, name: 'Pull-Ups', targetArea: 'Everywhere', workout_id: 3 },
        //Leg Day
        { id: 10, name: 'Calf Raises', targetArea: 'Calves', workout_id: 4 },
        { id: 11, name: 'Squats', targetArea: 'buns n thighs', workout_id: 4 },
        { id: 12, name: 'Lunges', targetArea: 'Legs', workout_id: 4 },
         //Chest N Tris
        { id: 13, name: 'Bench Press', targetArea: 'Chest & tri\s', workout_id: 5 },
        { id: 14, name: 'Dips', targetArea: 'tri\s', workout_id: 5 },
        { id: 15, name: 'Push-Ups', targetArea: 'Chest & tri\s', workout_id: 5 },
        //Shoulders and bis
        { id: 16, name: 'Curls', targetArea: 'Bi\s', workout_id: 6 },
        { id: 17, name: 'Shoulder-Presses', targetArea: 'Shoulders & Back', workout_id: 6 },
        { id: 18, name: 'Pull-Ups', targetArea: 'Everywhere', workout_id: 6 },
        //Leg Day
        { id: 19, name: 'Calf Raises', targetArea: 'Calves', workout_id: 7 },
        { id: 20, name: 'Squats', targetArea: 'buns n thighs', workout_id: 7 },
        { id: 21, name: 'Lunges', targetArea: 'Legs', workout_id: 7 },
         //Chest N Tris
        { id: 22, name: 'Bench Press', targetArea: 'Chest & tri\s', workout_id: 8 },
        { id: 23, name: 'Dips', targetArea: 'tri\s', workout_id: 8 },
        { id: 24, name: 'Push-Ups', targetArea: 'Chest & tri\s', workout_id: 8 },
        //Shoulders and bis
        { id: 25, name: 'Curls', targetArea: 'Bi\s', workout_id: 9 },
        { id: 26, name: 'Shoulder-Presses', targetArea: 'Shoulders & Back', workout_id: 9 },
        { id: 27, name: 'Pull-Ups', targetArea: 'Everywhere', workout_id: 9 },
        // -----------------------------------------------------------------------
      ]);
    });
};
