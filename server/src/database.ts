//import mysql from 'promise-mysql';

//const pool = mysql.createPool(keys.database);

/*pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('db is connected');
});*/

//export default pool;

/* ------------ PostgreSQL configuration and connection ------------------ */

import keys from './keys';
import pg from 'pg';

const pg_d = new pg.Client(keys.database);

pg_d.connect().then(response => {
    console.log('DataBase is connected');
});

export default pg_d;