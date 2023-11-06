DROP DATABASE IF EXISTS tasks_dev;
CREATE DATABASE tasks_dev;

\c tasks_dev;

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description VARCHAR(200) DEFAULT NULL, 
    deadline DATE DEFAULT NULL, 
    category VARCHAR(50) DEFAULT 'Uncategorized', 
    assigned_to VARCHAR(70) DEFAULT 'Unassigned', 
    status TEXT DEFAULT 'Pending' 
 );