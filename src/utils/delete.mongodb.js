const database = 'F8_education';
use(database);
db.courses.deleteMany({})
db.counters.deleteMany({})