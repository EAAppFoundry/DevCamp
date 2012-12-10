function setDevelopmentConfig(){
    // These are just examples, insert you info here
    DatabaseConfig.port = 45137;
    DatabaseConfig.host = 'ds045137.mongolab.com';
    DatabaseConfig.name = 'devcamp';
    DatabaseConfig.user = 'camper';
    DatabaseConfig.pass = '!helloea';

    EnvConfig.port = 3000;
};

function setProductionConfig(){
    // These are just examples, insert you info here
   DatabaseConfig.port = 45137;
    DatabaseConfig.host = 'ds045137.mongolab.com';
    DatabaseConfig.name = 'devcamp';
    DatabaseConfig.user = 'camper';
    DatabaseConfig.pass = '!helloea';

    EnvConfig.port = 3000;
}

var DatabaseConfig = {
    port        : Number,
    host        : String,
    name        : String,
    user        : String,
    pass        : String
};

var EnvConfig = {
    port        : Number
};

module.exports.DatabaseConfig = DatabaseConfig;
module.exports.EnvConfig = EnvConfig;
module.exports.setDevelopmentConfig = setDevelopmentConfig;
module.exports.setProductionConfig = setProductionConfig;
