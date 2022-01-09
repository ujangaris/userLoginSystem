#Section 4 : User Login System

## 13.Getting Started With MongoDB Part B

use nodeauth
switched to db nodeauth > db.createCollection('users')
{ "ok" : 1 }
show collections
users
db.users.insert({name:'Ujang Arisandi', email:'ujangaja@gmail.com',username: 'ujang', password:'1234'})
db.users.insert({name:'Bradin', email:'bradin@gmail.com',username: 'brad', password:'1234'})
db.users.insert({name:'Mike', email:'mike@gmail.com',username: 'mike', password:'1234'})

untuk melihat isi colletion:
db.users.find().pretty()

update users
db.users.update({username:'brad'}, {$set:{name:'Brad Traversy', email:'brad@gmail.com'}})

delete user
db.users.remove({username:'mike'})
