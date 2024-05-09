// 5-1-A Install MongoDB Compass & No SQL Booster ( Windows)

/****
 * Mongodb Compass downloaded
 * Mongosh Shell downloaded to use in windows terminal
 * 
 * used command like: create db, insert etc
 * 
 * 
 * 
 * Filed Filtering: db.test.find({age: 17}, {gender: 1, name:1, company: 1, email: 1})
 * 
 * Project: db.test.find({age: 17}).project({name: 1, email:1, gender: 1})
 * project doesn't works with findOne.
 *  */

/***
 * 5-3 
 * $Eq =     db.test.find({age: {$eq: 17}}), 
 * $Neq =     db.test.find({age: {$ne: 17}}), 
 * $Gt =     db.test.find({age: {$gt: 17}}), 
 * $Lt =     db.test.find({age: {$lt: 17}}), 
 * $Gte =     db.test.find({age: {$gte: 30}}), 
 * $Lte =     db.test.find({age: {$lte: 45}})
 * 
 */ 