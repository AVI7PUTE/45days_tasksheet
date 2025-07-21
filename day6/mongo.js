use admin
switched to db admin
use college
switched to db college
db.createCollection("Studentdata")
db.Studentdata.insertMany([{name:"avishkar",age:21,marks:90},{name:"rahul",age:20,marks:23},{name:"komal",age:34,marks:90},{name:
  "niki",age:20}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687eb7545175794f6f410afd'),
    '1': ObjectId('687eb7545175794f6f410afe'),
    '2': ObjectId('687eb7545175794f6f410aff'),
    '3': ObjectId('687eb7545175794f6f410b00')
  }
}
db.Studentdata.find()
{
  _id: ObjectId('687eb7545175794f6f410afd'),
  name: 'avishkar',
  age: 21,
  marks: 90
}
{
  _id: ObjectId('687eb7545175794f6f410afe'),
  name: 'rahul',
  age: 20,
  marks: 23
}
{
  _id: ObjectId('687eb7545175794f6f410aff'),
  name: 'komal',
  age: 34,
  marks: 90
}
{
  _id: ObjectId('687eb7545175794f6f410b00'),
  name: 'niki',
  age: 20
}
db.Studentdata.insertOne({name:"shubhngi",Email:"shubhsngisahane82gmail.com",age:21})
{
  acknowledged: true,
  insertedId: ObjectId('687eb88b5175794f6f410b01')
}
db.Studentdata.find()
{
  _id: ObjectId('687eb7545175794f6f410afd'),
  name: 'avishkar',
  age: 21,
  marks: 90
}
{
  _id: ObjectId('687eb7545175794f6f410afe'),
  name: 'rahul',
  age: 20,
  marks: 23
}
{
  _id: ObjectId('687eb7545175794f6f410aff'),
  name: 'komal',
  age: 34,
  marks: 90
}
{
  _id: ObjectId('687eb7545175794f6f410b00'),
  name: 'niki',
  age: 20
}
{
  _id: ObjectId('687eb88b5175794f6f410b01'),
  name: 'shubhngi',
  Email: 'shubhsngisahane82gmail.com',
  age: 21
}
db.Studentdata.find({name:"niki"})
{
  _id: ObjectId('687eb7545175794f6f410b00'),
  name: 'niki',
  age: 20
}

db.Studentdata.updateOne({age:21},{$set:{name:"avishkar"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}

db.Studentdata.deleteOne({name:"niki"})

{
  acknowledged: true,
  deletedCount: 1
}