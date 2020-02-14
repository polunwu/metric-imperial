/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    const fistCharIndex = input.search(/[a-zA-z]/);
    const digitString = input.slice(0, fistCharIndex);
    const splits = digitString.split('/');
    
    if (splits.length === 1){
      result = splits[0] ? Number(splits[0]) : 1;
    } else if (splits.length === 2){
      result = (splits[0] && splits[1]) ? splits[0]/splits[1] : NaN;
    } else {
      result = NaN;
    }
    
    return isNaN(result) ? 'invalid number' : result;  };
  
  this.getUnit = function(input) {
     var result;
    
    const fistCharIndex = input.search(/[a-zA-z]/);
    const unitString = input.slice(fistCharIndex);
    const validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    
    return validUnits.includes(unitString) ? unitString : 'invalid unit';  };
  
  this.getReturnUnit = function(initUnit) {

    
    if (initUnit === 'invalid unit') {
      return 'invalid unit';
    } else {
      initUnit = initUnit.toLowerCase()
      const convertUnit = {
        l: 'gal', gal: 'l', km: 'mi', mi: 'km', kg: 'lbs', lbs: 'kg'
      }
      return convertUnit[initUnit];
    }  };

  this.spellOutUnit = function(unit) {

    if (unit === 'invalid unit') {
      return '<invalid unit>';
    } else {
      unit = unit.toLowerCase();
      const spellUnit = {
        l: 'liters', gal: 'gallons', km: 'kilometers', mi: 'miles', kg: 'kilograms', lbs: 'pounds'
      }
      return spellUnit[unit];
    }
      };
  
  this.convert = function(initNum, initUnit) {

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    if (initUnit.includes('invalid')) {
      return 'invalid number';
    } else if (initNum === 'invalid number'){
      return 'invalid number';
    } else {
        initUnit = initUnit.toLowerCase();
        switch (initUnit) {
        case 'gal':
          result = initNum * galToL;
          break;
        case 'l':
          result = initNum / galToL;
          break;
        case 'lbs':
          result = initNum * lbsToKg;
          break;
        case 'kg': 
          result = initNum / lbsToKg;
          break;
        case 'mi':
          result = initNum * miToKm;
          break;
        case 'km':
          result = initNum / miToKm;
          break;
      }
 
      result = Math.round(result * 100000)/100000;
      return result;
    }  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;    return result;
  };
  
}

module.exports = ConvertHandler;

