const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

            app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
); // create engine and then name it 'hbs', extname is the way we config extension name for template files. It's must
// be same the engine name
app.set('view engine', 'hbs'); // use view engine name 'hbs'
app.set('views', path.join(__dirname, 'resources/views')); // config 'views' folder direction

// routes init
route(app);

                app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
