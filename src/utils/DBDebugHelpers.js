/**
 * This file contains functions that can be useful understand the SQLite DB
 * and debug it
 */

 import db from '../Database';

 export function logTableList() {
   db.transaction(tx => {
     tx.executeSql(
       `SELECT * FROM sqlite_master WHERE type='table'`,
       null,
       (tx, res) => {
         res.rows._array.forEach(table => console.log(table.name))
       },
       (tx, err) => console.log(err)
     );
   });
 }
