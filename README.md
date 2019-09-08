# back-end

## Endpoints

***endpoints for AUTH table***

    - /auth/register - register a user using a .POST
        ## data requirement example ##
        {
        "fullname": "Darth Vader",
        "email": "IwearAmask@yahoo.com",
        "username": "IamEvil",
        "password": "red",
        "height": 72,
        "weight": 250
        }

    - /auth/login - login with a user using a .POST
        "username": "IamEvil",
        "password": "red"

        *** passwords for seed users ***
            Yoda = green
            kenobi = blue
            mace = purple


    - /auth/checkauth - use this endpoint with a .POST to allow for data persistence on page refresh

***endpoints for USERS table***

    - /users/  - get an array of user objects using a .GET
    
    - /users/:user_id/workouts - gets workouts by user_id using a .GET

***endpoints for WORKOUTS table***

    - /workouts/ - get an array of workout objects using .GET or add a workout using .POST

    - /workouts/:id - delete a workout with .DELETE or update a workout using .PUT

    - /workouts/:workout_id/exercises - get all exercises for a workout using a .GET. ALSO added the ability to .POST exercises to workouts

***endpoints for EXERCISES table***

    -/exercises/ - get an array of exercise objects using .GET or add an exercise using .POST

    -/exercises/:id - delete an exercise with .DELETE or update an exercise using .PUT

    -/exercises/:exercise_id/sets - get all sets for an exercise using a .GET.  ALSO added the ability to .POST sets to exercises. 

***endpoints for SETS table***

    -/sets/ - get an array of set objects using .GET or add a set using .POST

    -/sets/:id - delete a set with .DELETE or update a set using .PUT
