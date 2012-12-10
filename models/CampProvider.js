var logger = require('winston');
config = require('./../config');
var db = config.DatabaseConfig;

var mongoose = require('mongoose');

var Schema = mongoose.Schema, ObjectID = Schema.ObjectId;

var Camp = new Schema({
    campName        : {type: String, required: true},
    startDate	    : {type: Date, required: true},
    endDate         : {type: Date, required: true},
    sponsers		: [String],
    hackathons		: [
    {
    		location	: String,
    		start 		: Date,
    		end 		: Date
    }],
    projects		: [
    {
    		name			: String,
    		description 	: String,
    		members			: [String],
    		url				: String,
    		source			: String
    	
    }]
});

mongoose.connect('mongodb://' + db.user + ':' + db.pass + '@' + db.host + ':' + db.port + '/' + db.name, {server: {socketOptions: {keepAlive: 1}}});
mongoose.model('Camp', Camp, 'camps');

var Camp = mongoose.model('Camp');

CampProvider = function(){};

CampProvider.prototype.getCamps = function(callback) {
	Camp.find({}, function(err, camps){
		callback(null, camps);
	});
}

CampProvider.prototype.getCampByName = function(name, callback) {
    Camp.findOne({campName: name}, function(err, camps) {
        callback(err, camps);
    });
}

CampProvider.prototype.save = function(camp, callback) {
    logger.info('saving!');

	var c = new Camp();

	c.campName = camp.campName;
	c.sponsers = camp.sponsers;
	c.startDate = camp.startDate;
	c.endDate = camp.endDate;
	c.hackathons = camp.hackathons;
	c.projects = camp.projects;

	c.save(function(err) {
        logger.info('err: ' + err);
		callback(err);
	})
}

// drops the Camps collection
CampProvider.prototype.clear = function(callback){
    logger.info(db.host);
    Camp.collection.drop(function(err){
        logger.info('err: ' + err);
        callback();
    })
}

exports.CampProvider = CampProvider;
module.exports.Camp = Camp;


