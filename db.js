const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    host:'db.nyksvictpsavqepobkfh.supabase.co',
    database: 'postgres',
    password: 'Danieljlugo21+',
    port:5432
})

module.exports = pool;