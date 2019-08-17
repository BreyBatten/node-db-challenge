Explain the difference between Relational Databases and SQL.

A relational database is how the information is stored. It is stored in a table with rows and columns to organize the data. SQL is the language used to manage the tables, or databases. SQL's purpose is to query the data in the table.

Why do tables need a primary key?

Primary keys are a way to identify each entry in the table. It is auto incrementing, so each time a new entry is made, the primary key is assigned the next number, to be unique. Now when you reference the primary key number, id, you see all of the information for that entry.

What is the name given to a table column that references the primary key on another table.

Foreign key

What do we need in order to have a many to many relationship between two tables.

A third table, referred to as the intermediary table. This table holds the foreign keys that reference the primary keys on the related tables. Each foreign key in the intermediary table doesn't have to be unique, but the combinations of the keys should be.