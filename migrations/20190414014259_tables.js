exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {
  
        tbl.increments();

        tbl.string('fullname', 255)
        tbl.string('email', 255)
        
        tbl.string('username', 255)
           .notNullable()
           .unique()
        
        tbl.string('password', 255).notNullable()
            
        tbl.integer('height', 255).notNullable()

        tbl.integer('weight', 255).notNullable()
  
    })
  
    .createTable('workouts', (tbl) => {

        tbl.increments();

        tbl
            .string('name', 255)
            .notNullable() //required
        
        tbl.date('date', 255)

        tbl.integer('user_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') //required
    })
  
    .createTable('exercises', (tbl) => {

        tbl.increments()
        
        tbl
            .string('name', 255)
            .notNullable() //required

        tbl
            .string('targetArea', 255)
            .notNullable() //required

        tbl
            .integer('workout_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('workouts')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') //required
    })
  
    .createTable('sets', (tbl) => {

        tbl.increments()
        tbl
            .integer('reps')
            .notNullable() //required
        
        tbl
            .integer('weight')
            .notNullable() //required
       
        tbl
            .integer('exercise_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('exercises')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') //required
    })
  };
  
  exports.down = function(knex, Promise) {
        return knex.schema
            .dropTableIfExists('users')
            .dropTableIfExists('workouts')
            .dropTableIfExists('exercises')
        .   dropTableIfExists('sets')
  };