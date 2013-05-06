var logger = require('winston');

var CampProvider = require('./../models/CampProvider').CampProvider;
var CampProvider = new CampProvider;
var Camp = require('./../models/CampProvider');

exports.getCamps = function(req, res) {
	CampProvider.getCamps(function(err, camps) {
		res.send(camps);
	})
}

exports.getCampByName = function(req, res) {
	var campName = req.params.name;
	logger.info(campName);

	CampProvider.getCampByName(campName, function(err, camps){
		res.send(camps);
	})
}

exports.save = function(req, res) {

	var firstEvent = createFirstEvent();

	CampProvider.save(firstEvent, function(err) {
		logger.info('err: ' + err);
		res.send('ok');
	})
}

function createFirstEvent() {

	var c = Camp.Camp;

	logger.info('camp: ' + Camp.Camp);

	c.campName = 'Camp0';
	c.startDate = new Date('2012-01-01');
	c.endDate = new Date('2012-01-04');
	c.sponsers = ['Don', 'Brian'];

	var hack1 = new Object();
	hack1.location = 'Strongbox West',
	hack1.start = new Date('2012-12-10');
	hack1.end = new Date('2012-12-12');

	var hack2 = new Object();
	hack2.location = 'Strongbox West',
	hack2.start = new Date('2013-01-07');
	hack2.end = new Date('2013-01-09');

	c.hackathons = [hack1, hack2];

	var project = new Object();
	project.name = 'On the Spot!';
	project.description = "An app to help you find open conference rooms, and desks around Turner's campus";
	project.members = ['Isabele Joefry', 'Hongwei Yan', 'Brad Peacock', 'Kwan Ng'];
	project.url = 'http://www.cnn.com';
	project.source = 'http://bitbucket.org';
	project.pitch = 'http://www.esri.com';
	project.deck = 'http://www.xkcd.com';

	var project2 = new Object();
	project2.name = 'FundIT!';
	project2.description = 'A kickstarter for the Enterprise';
	project2.members = ['Allen Lyons','Rich Anderson', 'Brian Still'];
	project2.url = 'http://www.cnn.com';
	project2.source = 'https://github.com/EAAppFoundry/FundIT';
	project.pitch = 'http://www.esri.com';
	project.deck = 'http://www.xkcd.com';
	
	c.projects = [project, project2];

	return c;

}
