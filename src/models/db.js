const sql = require('mssql');
const config = {
    "user": "admin",
    "password": "Interglobe12",
    "database": "CREASYS_PROD",
    "server": "garmex.cwduy9q4fnt5.ap-south-1.rds.amazonaws.com",
    "port": 1433,
    "dialect": "mssql",
    "operatorsAliases": "false",
    "dialectOptions": {
        "encrypt": true
    }
};

let pool = null;

async function getPool() {
    try {
        if (pool) {
            return pool;
        }
        pool = await new sql.ConnectionPool(config).connect();
        return pool;
    } catch (error){
        console.log(error);
        pool = null;
    }
}

async function closePool() {
    try {
        await pool.close();
        pool = null;
    } catch(error) {
        console.log(error);
        pool = null;        
    }        
}

module.exports.getPool = getPool;
module.exports.closePool = closePool;
