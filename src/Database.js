import { SQLite } from 'expo';

// db needs to be a singleton in all the project
export default db = SQLite.openDatabase('yasav.db');

// we need to separate all the requests;
export const CREATE_DB_TABLES_REQUESTS = [
  `CREATE TABLE IF NOT EXISTS activity (
    id INTEGER PRIMARY KEY NOT NULL,
    title TEXT,
    description TEXT,
    type INT,
    activity_date DATE,
    visible BOOLEAN,
    content_source TEXT,
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
  );`,
  `CREATE TABLE IF NOT EXISTS activity_tag (
    id INTEGER PRIMARY KEY NOT NULL,
    activity_id INT,
    tag_id INT,
    FOREIGN KEY (activity_id) REFERENCES activity(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id)
  );`,
  `CREATE TABLE IF NOT EXISTS activity_link (
    id INTEGER PRIMARY KEY NOT NULL,
    weight INT,
    comment TEXT,
    activity_one_id INT,
    activity_two_id INT,
    FOREIGN KEY (activity_one_id) REFERENCES activity(id),
    FOREIGN KEY (activity_two_id) REFERENCES activity(id)
  );`
];
