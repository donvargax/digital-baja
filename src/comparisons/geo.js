var Faker = require("faker");

var geo = function(){
    
    var lat =  Faker.address.latitude;
    
    var lng = Faker.address.longitude;
    
    return {
        
        lat: lat(),
        
        lgn: lng(),
    }
};

module.exports.geo = geo;