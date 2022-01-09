## Section 4 : User Login System

### 13.Getting Started With MongoDB Part B

    use nodeauth
    switched to db nodeauth > db.createCollection('users')
    { "ok" : 1 }
    show collections
    users

    create users
    db.users.insert({name:'Ujang Arisandi', email:'ujangaja@gmail.com',username: 'ujang', password:'1234'})
    db.users.insert({name:'Bradin', email:'bradin@gmail.com',username: 'brad', password:'1234'})
    db.users.insert({name:'Mike', email:'mike@gmail.com',username: 'mike', password:'1234'})

    untuk melihat isi colletion:
    db.users.find().pretty()

    update users
    db.users.update({username:'brad'}, {$set:{name:'Brad Traversy', email:'brad@gmail.com'}})

    delete user
    db.users.remove({username:'mike'})

### 14. App & Middleware Setup

    langkah-lagkah install express-generator :
    npm install -g express@4.13.4
    npm install -g express-generator@4.13.1

    update package.json:
        "mongodb": "*",
        "mongoose": "*",
        "connect-flash": "*",
        "express-messages": "*",
        "express-validator": "*",
        "passport": "*",
        "passport-local": "*",
        "passport-http": "*",
        "multer": "*"

    kemudian pada terminal ketikan perintah: npm install

    npm install express-session@1.13.0
    npm install express-validator@5.3.0// ini di install jika terjadi error not a function

    kemudian buak brwoser : http://localhost:3000/

## 15. Views & Layout

    Documentation:
                    - https://getbootstrap.com/docs/3.3/getting-started/#download
                    - https://jade-lang.com/

    langkah pertama download bootstrap 3.
    pindahkan masing2 file bootstrap.js dan bootstrap.css ke dalam file
        - public/stylesheet untuk css   => bootstrap.css
        - public/javascript untuk js    => bootstrap.js


    #note : jika ada perubahan restart server terlebih dahulu : npm start
