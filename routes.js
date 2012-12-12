app = module.parent.exports.app;

var SiteController = require('./controllers/SiteController');
var CampController = require('./controllers/CampController');


app.get('/', SiteController.index);

app.get('/camps/:name', CampController.getCampByName);
app.get('/camps', CampController.getCamps);
app.get('/testsave', CampController.save);
