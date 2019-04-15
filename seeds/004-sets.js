
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sets').insert([
        //Calf Raises
        {id: 1, reps: 50, weight: 200, exercise_id: 1},
        {id: 2, reps: 50, weight: 200, exercise_id: 1},
        {id: 3, reps: 50, weight: 200, exercise_id: 1},
        {id: 4, reps: 50, weight: 200, exercise_id: 1},
        {id: 5, reps: 50, weight: 200, exercise_id: 1},
        //Squats
        {id: 6, reps: 15, weight: 300, exercise_id: 2},
        {id: 7, reps: 15, weight: 300, exercise_id: 2},
        {id: 8, reps: 15, weight: 300, exercise_id: 2},
        {id: 9, reps: 15, weight: 300, exercise_id: 2},
        {id: 10, reps: 15, weight: 300, exercise_id: 2},
        //Lunges
        {id: 11, reps: 20, weight: 150, exercise_id: 3},
        {id: 12, reps: 20, weight: 150, exercise_id: 3},
        {id: 13, reps: 20, weight: 150, exercise_id: 3},
        {id: 14, reps: 20, weight: 150, exercise_id: 3},
        {id: 15, reps: 20, weight: 150, exercise_id: 3},
        //Bench
        {id: 16, reps: 10, weight: 225, exercise_id: 4},
        {id: 17, reps: 10, weight: 225, exercise_id: 4},
        {id: 18, reps: 10, weight: 225, exercise_id: 4},
        {id: 19, reps: 10, weight: 225, exercise_id: 4},
        {id: 20, reps: 10, weight: 225, exercise_id: 4},
        //Dips
        {id: 21, reps: 25, weight: 45, exercise_id: 5},
        {id: 22, reps: 25, weight: 45, exercise_id: 5},
        {id: 23, reps: 25, weight: 45, exercise_id: 5},
        {id: 24, reps: 25, weight: 45, exercise_id: 5},
        {id: 25, reps: 25, weight: 45, exercise_id: 5},
        //Push Ups
        {id: 26, reps: 50, weight: 0, exercise_id: 6},
        {id: 27, reps: 50, weight: 0, exercise_id: 6},
        {id: 28, reps: 50, weight: 0, exercise_id: 6},
        {id: 29, reps: 50, weight: 0, exercise_id: 6},
        {id: 30, reps: 50, weight: 0, exercise_id: 6},
        //Curls
        {id: 31, reps: 10, weight: 35, exercise_id: 7},
        {id: 32, reps: 10, weight: 35, exercise_id: 7},
        {id: 33, reps: 10, weight: 35, exercise_id: 7},
        {id: 34, reps: 10, weight: 35, exercise_id: 7},
        {id: 35, reps: 10, weight: 35, exercise_id: 7},
        //Shoulder-presses
        {id: 36, reps: 10, weight: 100, exercise_id: 8},
        {id: 37, reps: 10, weight: 100, exercise_id: 8},
        {id: 38, reps: 10, weight: 100, exercise_id: 8},
        {id: 39, reps: 10, weight: 100, exercise_id: 8},
        {id: 40, reps: 10, weight: 100, exercise_id: 8},
        //Pull-Ups
        {id: 41, reps: 5, weight: 45, exercise_id: 9},
        {id: 42, reps: 5, weight: 45, exercise_id: 9},
        {id: 43, reps: 5, weight: 45, exercise_id: 9},
        {id: 44, reps: 5, weight: 45, exercise_id: 9},
        {id: 45, reps: 5, weight: 45, exercise_id: 9},
        //-------------------------------------------------
         //Calf Raises
         {id: 46, reps: 50, weight: 200, exercise_id: 10},
         {id: 47, reps: 50, weight: 200, exercise_id: 10},
         {id: 48, reps: 50, weight: 200, exercise_id: 10},
         {id: 49, reps: 50, weight: 200, exercise_id: 10},
         {id: 50, reps: 50, weight: 200, exercise_id: 10},
         //Squats
         {id: 51, reps: 15, weight: 300, exercise_id: 11},
         {id: 52, reps: 15, weight: 300, exercise_id: 11},
         {id: 53, reps: 15, weight: 300, exercise_id: 11},
         {id: 54, reps: 15, weight: 300, exercise_id: 11},
         {id: 55, reps: 15, weight: 300, exercise_id: 11},
         //Lunges
         {id: 56, reps: 20, weight: 150, exercise_id: 12},
         {id: 57, reps: 20, weight: 150, exercise_id: 12},
         {id: 58, reps: 20, weight: 150, exercise_id: 12},
         {id: 59, reps: 20, weight: 150, exercise_id: 12},
         {id: 60, reps: 20, weight: 150, exercise_id: 12},
         //Bench
         {id: 61, reps: 10, weight: 225, exercise_id: 13},
         {id: 62, reps: 10, weight: 225, exercise_id: 13},
         {id: 63, reps: 10, weight: 225, exercise_id: 13},
         {id: 64, reps: 10, weight: 225, exercise_id: 13},
         {id: 65, reps: 10, weight: 225, exercise_id: 13},
         //Dips
         {id: 66, reps: 25, weight: 45, exercise_id: 14},
         {id: 67, reps: 25, weight: 45, exercise_id: 14},
         {id: 68, reps: 25, weight: 45, exercise_id: 14},
         {id: 69, reps: 25, weight: 45, exercise_id: 14},
         {id: 70, reps: 25, weight: 45, exercise_id: 14},
         //Push Ups
         {id: 71, reps: 50, weight: 0, exercise_id: 15},
         {id: 72, reps: 50, weight: 0, exercise_id: 15},
         {id: 73, reps: 50, weight: 0, exercise_id: 15},
         {id: 74, reps: 50, weight: 0, exercise_id: 15},
         {id: 75, reps: 50, weight: 0, exercise_id: 15},
         //Curls
         {id: 76, reps: 10, weight: 35, exercise_id: 16},
         {id: 77, reps: 10, weight: 35, exercise_id: 16},
         {id: 78, reps: 10, weight: 35, exercise_id: 16},
         {id: 79, reps: 10, weight: 35, exercise_id: 16},
         {id: 80, reps: 10, weight: 35, exercise_id: 16},
         //Shoulder-presses
         {id: 81, reps: 10, weight: 100, exercise_id: 17},
         {id: 82, reps: 10, weight: 100, exercise_id: 17},
         {id: 83, reps: 10, weight: 100, exercise_id: 17},
         {id: 84, reps: 10, weight: 100, exercise_id: 17},
         {id: 85, reps: 10, weight: 100, exercise_id: 17},
         //Pull-Ups
         {id: 86, reps: 5, weight: 45, exercise_id: 18},
         {id: 87, reps: 5, weight: 45, exercise_id: 18},
         {id: 88, reps: 5, weight: 45, exercise_id: 18},
         {id: 89, reps: 5, weight: 45, exercise_id: 18},
         {id: 90, reps: 5, weight: 45, exercise_id: 18},
         //---------------------------------------------
         //Calf Raises
         {id: 91, reps: 50, weight: 200, exercise_id: 19},
         {id: 92, reps: 50, weight: 200, exercise_id: 19},
         {id: 93, reps: 50, weight: 200, exercise_id: 19},
         {id: 94, reps: 50, weight: 200, exercise_id: 19},
         {id: 95, reps: 50, weight: 200, exercise_id: 19},
         //Squats
         {id: 96, reps: 15, weight: 300, exercise_id: 20},
         {id: 97, reps: 15, weight: 300, exercise_id: 20},
         {id: 98, reps: 15, weight: 300, exercise_id: 20},
         {id: 99, reps: 15, weight: 300, exercise_id: 20},
         {id: 100, reps: 15, weight: 300, exercise_id: 20},
         //Lunges
         {id: 101, reps: 20, weight: 150, exercise_id: 21},
         {id: 102, reps: 20, weight: 150, exercise_id: 21},
         {id: 103, reps: 20, weight: 150, exercise_id: 21},
         {id: 104, reps: 20, weight: 150, exercise_id: 21},
         {id: 105, reps: 20, weight: 150, exercise_id: 21},
         //Bench
         {id: 106, reps: 10, weight: 225, exercise_id: 22},
         {id: 107, reps: 10, weight: 225, exercise_id: 22},
         {id: 108, reps: 10, weight: 225, exercise_id: 22},
         {id: 109, reps: 10, weight: 225, exercise_id: 22},
         {id: 110, reps: 10, weight: 225, exercise_id: 22},
         //Dips
         {id: 111, reps: 25, weight: 45, exercise_id: 23},
         {id: 112, reps: 25, weight: 45, exercise_id: 23},
         {id: 113, reps: 25, weight: 45, exercise_id: 23},
         {id: 114, reps: 25, weight: 45, exercise_id: 23},
         {id: 115, reps: 25, weight: 45, exercise_id: 23},
         //Push Ups
         {id: 116, reps: 50, weight: 0, exercise_id: 24},
         {id: 117, reps: 50, weight: 0, exercise_id: 24},
         {id: 118, reps: 50, weight: 0, exercise_id: 24},
         {id: 119, reps: 50, weight: 0, exercise_id: 24},
         {id: 120, reps: 50, weight: 0, exercise_id: 24},
         //Curls
         {id: 121, reps: 10, weight: 35, exercise_id: 25},
         {id: 122, reps: 10, weight: 35, exercise_id: 25},
         {id: 123, reps: 10, weight: 35, exercise_id: 25},
         {id: 124, reps: 10, weight: 35, exercise_id: 25},
         {id: 125, reps: 10, weight: 35, exercise_id: 25},
         //Shoulder-presses
         {id: 126, reps: 10, weight: 100, exercise_id: 26},
         {id: 127, reps: 10, weight: 100, exercise_id: 26},
         {id: 128, reps: 10, weight: 100, exercise_id: 26},
         {id: 129, reps: 10, weight: 100, exercise_id: 26},
         {id: 130, reps: 10, weight: 100, exercise_id: 26},
         //Pull-Ups
         {id: 131, reps: 5, weight: 45, exercise_id: 27},
         {id: 132, reps: 5, weight: 45, exercise_id: 27},
         {id: 133, reps: 5, weight: 45, exercise_id: 27},
         {id: 134, reps: 5, weight: 45, exercise_id: 27},
         {id: 135, reps: 5, weight: 45, exercise_id: 27},
         
        
      ]);
    });
};
