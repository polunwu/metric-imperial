/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
     
      if (initNum === 'invalid number' && initUnit === 'invalid unit') {
        res.json({error: 'invalid number and unit', string: 'Error - ' + input});
      } else if (initNum === 'invalid number') {
        res.json({error: 'invalid number', string: 'Error - ' + input});
      } else if (initUnit === 'invalid unit') {
        res.json({error: 'invalid input unit', string: 'Error - ' + input});
      } else {
        res.json({
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string: toString
      });
      }
      
    });
    
};
