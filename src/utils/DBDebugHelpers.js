/**
 * This file contains functions that can be useful understand the SQLite DB
 * and debug it
 */

import db, {
  executeSql
} from '../Database';

export function logTableList() {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM sqlite_master WHERE type='table'`,
      null,
      (tx, res) => {
        res.rows._array.forEach(table => console.log(table.name))
      },
      (tx, err) => console.log("err", err)
    );
  });
}

export function showTableContent(tableName) {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM '+tableName,
       null,
      (tx, res) => {
        res.rows._array.forEach(row => console.log(row))
      },
      (tx, err) => console.log("err", err)
    );
  });
}

export function dropAllTables() {
  executeSql(`DROP TABLE IF EXISTS activity`);
  executeSql(`DROP TABLE IF EXISTS interlocutor`);
  executeSql(`DROP TABLE IF EXISTS todo`);
  executeSql(`DROP TABLE IF EXISTS tag`);
  executeSql(`DROP TABLE IF EXISTS activity_tag`);
  executeSql(`DROP TABLE IF EXISTS activity_link`);

  // Not very optimized
  setTimeout(() => logTableList(), 2000)
}
