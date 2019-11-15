const db = require('../database/dbConfig')

module.exports = {
    get,
    insert,
    findById,
    filtering
}
function findById(id){
    return db('users').where({ id }).first()
}

function get(){
    return db('users')
}


async function insert(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function filtering(usingThis) {
    return db('users').where(usingThis).first()
}