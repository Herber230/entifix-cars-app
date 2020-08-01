
db = db.getSiblingDB('entifix-cars-db');

db.createUser({ user: "entifixUser", pwd: "entifix123", roles: [{ role: "readWrite", db: "entifix-cars-db" }] });