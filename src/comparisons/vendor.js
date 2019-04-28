var Faker = require("faker");

var vendor = function() {
    
    return {
        
        name: Faker.company.companyName()
    };
    
};

module.exports.vendor = vendor;