// create players
var max = 8,
    
    vendors= [],
    
    Vendor = require("./vendor"),
    
    Geo = require("./geo"),
    
    Faker = require("faker");

/**
 * seed
 */

var u = 0, j = 0, z = 0, matchRound = [], matchRoundId = null;

var vendors = [];
while(1){
    
    vendors.push(Object.assign({}, Vendor.vendor(), Geo.geo(), {bye: 0}));
    vendors.push(Object.assign({}, Vendor.vendor(), Geo.geo(), {bye: 0}));
    
    if(vendors.length === max) break;
    
}

/**
 * Elimination
 * @param vendors
 * @returns {*}
 */
function bye(vendors) {
    
    for (var n = 0; n < vendors.length; n++) {
        if (n % 2) {
            vendors[n].bye = 1;
        }
    }
    
    return vendors;
}


/**
 * Regroup next round
 * @param vendors
 * @returns {Array}
 */
function qualify(vendors) {
    var next = [];
    for (var r = 0; r < vendors.length; r++) {
        
        if (vendors[r].bye === 0) {
            next.push(vendors[r]);
        }
    }
    
    return next;
}

/**
 * play
 */
console.log("=================================");
console.log("Round vendors");
console.log(vendors);

while(1) {

    
    vendors = qualify(bye(vendors));

    console.log("=================================");
    console.log("Round vendors");
    console.log(vendors);
    
    if(vendors.length === 1)
        break;
}
