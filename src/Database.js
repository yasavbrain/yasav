import { SQLite } from 'expo';

// db needs to be a singleton in all the project
export default db = SQLite.openDatabase('yasav.db');

// we need to separate all the requests;
export const CREATE_DB_TABLES_REQUESTS = [
  `CREATE TABLE IF NOT EXISTS activity (
    id INTEGER PRIMARY KEY NOT NULL,
    title TEXT,
    content TEXT,
    type INT,
    activity_date DATE,
    visible BOOLEAN,
    interlocutor_id INT,
      FOREIGN KEY (interlocutor_id) REFERENCES interlocutor(id)
  );`,
  `CREATE TABLE IF NOT EXISTS interlocutor (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT,
    link_to_me TEXT,
    type INT,
    characteristics TEXT
  );`,
  `CREATE TABLE IF NOT EXISTS todo (
    id INTEGER PRIMARY KEY NOT NULL,
    title TEXT,
    due_date DATETIME,
    priority INT,
    status INT,
    activity_id INT,
      FOREIGN KEY (activity_id) REFERENCES activity(id)
  );`,
  `CREATE TABLE IF NOT EXISTS tag (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT
  );`
];
