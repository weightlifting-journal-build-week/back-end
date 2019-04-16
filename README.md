# back-end

## Endpoints

***endpoints for AUTH table***

    - /auth/register - register a user using a .POST
        ## data requirement example ##
        {
        "fullname": "Darth Vader",
        "email": "killingyounglings@yahoo.com",
        "username": "childslayer",
        "password": "red",
        "height": 72,
        "weight": 250
        }

    - /auth/login - login with a user using a .POST
        "username": "childslayer",
        "password": "red"

        *** passwords for seed users ***
            Yoda = green
            kenobi = blue
            mace = purple

***endpoints for USERS table***

    - /users/  - get an array of user objects using a .GET
    - /users/:id/workouts - gets workouts by user_id using a .GET

***endpoints for WORKOUTS table***

    - /workouts/ - get an array of workout objects using .GET or add a workout using .POST

    - /workouts/:id - delete a workout with .DELETE or update a workout using .PUT

    - /workouts/:id/exercises - get all exercises for a workout using a .GET

***endpoints for EXERCISES table***

    -/exercises/ - get an array of exercise objects using .GET or add an exercise using .POST

    -/exercises/:id - delete an exercise with .DELETE or update an exercise using .PUT

    -/exercises/:id/sets - get all sets for an exercise using a .GET

***endpoints for SETS table***

    -/sets/ - get an array of set objects using .GET or add a set using .POST

    -/sets/:id - delete a set with .DELETE or update a set using .PUT