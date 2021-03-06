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

## 16. Register Form & Validation part 1

    pengujian pada register form : http://localhost:3000/users/register
    lakukan upload image kemudian send,jika berhasil akan ada data yang sesuai pada terminal

## 16. Register Form & Validation part 2 | kondisi

    pengujian pada register form : http://localhost:3000/users/register
    lakukan upload image kemudian namun tidak mengguanakn file send,jika berhasil akan ada data yang message pada terminal 'No Upload file'

## 16. Register Form & Validation part 3 | final

    pengujian pada register form : http://localhost:3000/users/register
    lakukan register dengan mengisi seluruh form, jika berhasil tidak akan tampil alter notfikasi
    jika dikosongkan akan tampil alert notfikasi

## 17. Models & User Registration part 1

    pengujian pada register form : http://localhost:3000/users/register
    lakukan register dengan mengisi seluruh form , maka akan ke riderect ke halaman home/default dari routenya.

    lakukan pengecekan ke database apakah data yang kita masukan berhasil.
    pada terminal ketikan :
        mongo
        show dbs => untuk melihat database
        use nodeauth => untuk masuk ke databse kita
        db.users.find().pretty()
        {
        "_id" : ObjectId("61da8511942677ba55b80cf7"),
        "name" : "Brad Traversy",
        "email" : "brad@gmail.com",
        "username" : "brad",
        "password" : "1234"
        }
        {
                "_id" : ObjectId("61da85f25968c5b89fee77fe"),
                "name" : "Ujang Arisandi",
                "email" : "ujangaja@gmail.com",
                "username" : "ujang",
                "password" : "1234"
        }
        {
                "_id" : ObjectId("61e3cfae583eb38a7f234fb6"),
                "username" : "ujang",
                "password" : "admin0k8",
                "email" : "ujangaja@gmail.com",
                "name" : "Ujang Arisandi",
                "__v" : 0
        }

## 17. Models & User Registration part 2 | flash message

    pengujian pada register form : http://localhost:3000/users/register
    lakukan register dengan mengisi seluruh form , maka akan ke riderect ke halaman home/default dari routenya.
    jika berhasil ada alert menyesuaikan success dan danger

## 18. Password Hashing with BCrypt

    Documentation: https://www.npmjs.com/package/bcrypt
        npm install bcryptjs --save

    lakukan pengujian pada brwoser dengan mengisi form register
    dapat diliat pada terminal : http://localhost:3000/users/register
        {
        username: 'diki',
        password: '$2a$10$jY2PWPL5wxRBpgpEO.z8..qY.SL/60VH10D4F3S7UoouSwr8pwENW',// ini tergenerate
        email: 'diki@mail.com',
        name: 'Diki Dikot',
        }

## 19. Password Login Authentication

    Documentation:  https://www.passportjs.org/docs/authenticate/

                        app.post('/login',
                        passport.authenticate('local'),
                        function(req, res) {
                            // If this function gets called, authentication was successful.
                            // `req.user` contains the authenticated user.
                            res.redirect('/users/' + req.user.username);
                        });

                    https://www.passportjs.org/docs/configure/

                        passport.serializeUser(function(user, done) {
                        done(null, user.id);
                        });

                        passport.deserializeUser(function(id, done) {
                        User.findById(id, function(err, user) {
                            done(err, user);
                        });
                        });
    pengujian pada browser login :http://localhost:3000/users/login
        login sebagai diki:
            username: diki , password: admin0k8

        jika berhasil akan ada alert success
        note login akan berhasil pada user yang register setelah menggunakan hasing bcrypt
        jika gagal login coba lakukan register terlebih dahulu kemudian , login dengan user tersebut.

## 20. Logout & Access Controll part 1

    pengujian pada browser login :http://localhost:3000/users/login
        login sebagai diki:
            username: diki , password: admin0k8

        jika berhasil akan ada alert success
        note login akan berhasil pada user yang register setelah menggunakan hasing bcrypt
        jika gagal login coba lakukan register terlebih dahulu kemudian , login dengan user tersebut.

## 20. Logout & Access Controll part 2 | kondisi

    dapat dilihat saat setelah merestart server button member akan hilang dikarenakan belum login

    pengujian pada browser login :http://localhost:3000/users/login
        login sebagai diki:
            username: diki , password: admin0k8

        jika berhasil akan ada alert success, dan akan ada button member , kemudian button login tidak ada.

        note login akan berhasil pada user yang register setelah menggunakan hasing bcrypt
        jika gagal login coba lakukan register terlebih dahulu kemudian , login dengan user tersebut.
