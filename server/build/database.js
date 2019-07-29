"use strict";
//import mysql from 'promise-mysql';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const pool = mysql.createPool(keys.database);
/*pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('db is connected');
});*/
//export default pool;
/* ------------ PostgreSQL configuration and connection ------------------ */
const keys_1 = __importDefault(require("./keys"));
const pg_1 = __importDefault(require("pg"));
const pg_d = new pg_1.default.Client(keys_1.default.database);
pg_d.connect().then(response => {
    console.log('DataBase is connected');
});
exports.default = pg_d;
