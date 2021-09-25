const path = require('path');
const rootDir = require('./util/path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use('/', (req, res, next) => { 
  res.status(400).render('404', {
    titlePage: 'Page Not Found'
  });
});

app.use("/users", (req, res, next) => {
  console.log("In the users");
  res.send(`<h1>You are in the /users </h1>`);
});

app.listen(3000);
