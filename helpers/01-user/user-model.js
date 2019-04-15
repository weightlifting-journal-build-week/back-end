const db = require('../../data/dbConfig');

module.exports = {
    find,
    getBy,
    findById,
    destroy,
    add,
    getUserWorkouts,
    getUserWithWorkouts
}

function find(){
    return db('users')
}

function getBy(sort){
    return db('users').where(sort);
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

async function add(user){
    const [id] = await db('users').insert(user);

    return db('users').where({ id }).first()
}

function destroy(id){
    return db('users').where({ id }).del()
}

function getUserWorkouts(userID){
    return db('workouts')
        .join('users', 'users.id', 'workouts.user_id')
        .select('workouts.*')
        .where('workouts.user_id', userID)
}

function getUserWithWorkouts(id){
    let query = db('users');
    if(id){ 
            query.where('users.id', id).first();
           
            const promises = [query, this.getUserWorkouts(id)];
         
            return Promise.all(promises).then(function(results){
                let [users, workouts] = results;
    
                users.workouts = workouts;
    
                return users;
            })
        }
    
}