db.getCollection('students.json').find({"scores.0.score":{"$gt":0,"$lt":1}})