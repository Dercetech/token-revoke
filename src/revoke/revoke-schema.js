'use strict';
module.exports = function revokeSchemaFactory(
	//config,
	//registerMongooseModel
	){

    let mongoose	= require('mongoose');
	let Schema      = require('mongoose').Schema;	
	   
    let RevokeSchema = new Schema({
        
        'user'  : { 'type' : String, 'required' : true },
		
		'issuedBefore'	: { 'type' : Number },	// Revoke tokens issued for this user before this date
		'expiresAfter'	: { 'type' : Number }	// Revocation can be deleted from DB after this date
    });

	
	//return registerMongooseModel('Revoke', RevokeSchema);
	return mongoose.model('Revoke', RevokeSchema);
}