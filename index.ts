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

/***
 * 5-4 
 *         
 * 
 * $In =     db.test.find({gender: "Female",age: {$in: [18,20,22,24,26]}}, {age: 1, gender:1}), 
 * $Nin =     db.test.find({gender: "Female",age: {$nin:  [18,20,22,24,26]}}, {age: 1, gender:1}), 
 * Implicit And  = db.test.find({gender: "Female",age: {$gt: 18, $lt: 30}}, {age: 1, gender:1})
 * Condition =  db.test.find({
    gender: "Female",
    age: { $nin: [18, 20, 22, 24, 26] },
    interests: {$in: ["Cooking", "Gaming"]}

}, { age: 1, gender: 1, interests: 1 })
 * 
*/

/****
 * $And = db.test.find({
    $and:
        [
            { age: { $gt: 12 } },
            { age: { $lt: 30 } },
        ]
})

,
 *  $Or = 
db.test.find({
    $or:
        [
            { interests: "Traveling" },
            { interests: "Cooking" },
        ]
}),



 * Implicit Vs Explicit
 *
 */

/*****
 * 5-6 
 * $Exists =  db.test.find({skills: {$exists: true}}), 
 * $Type = db.test.find({friends: {$type: "array"}}),
 * $Size (only for array) = db.test.find({friends: {$size: 4}})

 * 
*/

/**
 * 5-7 
 * $All = db.test.find({ interests: { $all: ["Cooking", "Gaming"] } }).
    project({ interests: 1 }) , 
 * $ElemMatch = db.test.find({ skills: { $elemMatch: { name: "JAVASCRIPT", level: "Intermidiate"} } }).
    project({ skills: 1 })
    

 * 
 * ***/

/***
 * 5-8
 * $Set (good for primitive type. But doesn't works well for non-primitive data type) = db.test.updateOne(
    { _id: new ObjectId("6406ad63fc13ae5a40000065") },
    { $set: { age: 99 } }

),
 * 
 * $AddToSet (doesn't insert duplicate value) = 
db.test.updateOne(
    { _id: new ObjectId("6406ad63fc13ae5a40000065") },
    { $addToSet: { interests: { $each: ["this is more new", "each modifier new"] } } }

)

 * $Push (can insert duplicate value) = 

// db.test.find({skills: {$exists: true}})
db.test.updateOne(
    { _id: new ObjectId("6406ad63fc13ae5a40000065") },
    { $push:  { interests: { $each: ["this is more new", "each modifier new"] } } }

)
 */
