// ##seedEvents.js
// ####Seeds the database with the first hackathon

// this script is run from the node.exe command-line
var config = require('../config');
var logger = require('winston');

config.setDevelopmentConfig();

var CampProvider = require('./../models/CampProvider').CampProvider;
CampProvider = new CampProvider();

var Camp = require('./../models/CampProvider');
var c = Camp.Camp;

c.campName = 'test';
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

var project2 = new Object();
project2.name = 'FundIT!';
project2.description = 'A kickstarter for the Enterprise';
project2.members = ['Allen Lyons','Rich Anderson', 'Brian Still'];
project2.url = 'http://www.cnn.com';
project2.source = 'https://github.com/EAAppFoundry/FundIT';
c.projects = [project, project2];

logger.info('dropping and readding');

// CampProvider.clear(function(err) {
// 	logger.info('err ' + err);

// 	logger.info('cleared...');

// 	CampProvider.save(c, function(err) {
// 		console.log('saved');
// 	})
// });

CampProvider.save(c, function(err) {
	console.log('err' + err);
	console.log('done');
});

process.exit();



