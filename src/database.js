//const mongoose = require('mongoose');
const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/notes-db-app', {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: false
// })
// .then(db => console.log('DB is connected'))
// .catch(err => console.error(err));

mongoose.connect("mongodb://notas-app:bvEtAucfKTQ08n1ffQoDmz3p0TrzI7zxkaHMUKbhB0pT93CtW8ywBJXsOEqeMjb3uI1FVAGF62BLadNsuAuqUw==@notas-app.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@notas-app@", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));