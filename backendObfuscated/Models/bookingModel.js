// const _0x55eae5=_0x3613;(function(_0x855e7,_0x12784c){const _0x1e63c2=_0x3613,_0x5f31dd=_0x855e7();while(!![]){try{const _0x5ca6d1=parseInt(_0x1e63c2(0x76))/0x1+-parseInt(_0x1e63c2(0x86))/0x2*(-parseInt(_0x1e63c2(0x7b))/0x3)+-parseInt(_0x1e63c2(0x7e))/0x4*(-parseInt(_0x1e63c2(0x8c))/0x5)+parseInt(_0x1e63c2(0x83))/0x6+parseInt(_0x1e63c2(0x7a))/0x7*(-parseInt(_0x1e63c2(0x77))/0x8)+parseInt(_0x1e63c2(0x8d))/0x9*(parseInt(_0x1e63c2(0x7f))/0xa)+-parseInt(_0x1e63c2(0x87))/0xb;if(_0x5ca6d1===_0x12784c)break;else _0x5f31dd['push'](_0x5f31dd['shift']());}catch(_0x1c8fab){_0x5f31dd['push'](_0x5f31dd['shift']());}}}(_0x3fe2,0x89a02));const mongoose=require(_0x55eae5(0x85)),Property=require(_0x55eae5(0x8a)),bookingSchema=new mongoose[(_0x55eae5(0x8e))]({'property':{'type':mongoose[_0x55eae5(0x8e)][_0x55eae5(0x7c)],'ref':_0x55eae5(0x7d),'required':[!![],_0x55eae5(0x84)]},'user':{'type':mongoose[_0x55eae5(0x8e)][_0x55eae5(0x7c)],'ref':'User','required':[!![],'Booking\x20must\x20belong\x20to\x20a\x20User!']},'price':{'type':Number,'required':[!![],_0x55eae5(0x78)]},'createdAt':{'type':Date,'default':Date[_0x55eae5(0x89)]()},'paid':{'type':Boolean,'default':!![]},'fromDate':{'type':Date},'toDate':{'type':Date},'guests':{'type':Number},'numberOfnights':{'type':Number}},{'timestamps':!![]});bookingSchema[_0x55eae5(0x79)](/^find/,function(_0x3c1c26){const _0x4624c5=_0x55eae5;this[_0x4624c5(0x82)](_0x4624c5(0x8b))[_0x4624c5(0x82)]({'path':'property','select':_0x4624c5(0x81)}),_0x3c1c26();});function _0x3613(_0x394aa,_0x1e0651){const _0x3fe2c7=_0x3fe2();return _0x3613=function(_0x36136f,_0x44bce3){_0x36136f=_0x36136f-0x76;let _0x2b0339=_0x3fe2c7[_0x36136f];return _0x2b0339;},_0x3613(_0x394aa,_0x1e0651);}const Booking=mongoose['model'](_0x55eae5(0x88),bookingSchema);module[_0x55eae5(0x80)]=Booking;function _0x3fe2(){const _0xe870bc=['booking\x20must\x20have\x20a\x20time.','pre','385mLtDEX','355029IFJFjz','ObjectId','Property','282088MqInUz','41570jZRfqg','exports','maximumGuest\x20location\x20images\x20propertyName\x20address','populate','138690iajnjN','Booking\x20must\x20belong\x20to\x20a\x20Property!','mongoose','2xlSSwv','972400AixuFU','Booking','now','./propertyModel','user','5YmFYWc','1242BAgWag','Schema','82728SBSSYb','31456dYCPsc'];_0x3fe2=function(){return _0xe870bc;};return _0x3fe2();}

const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  'property': {
    'type': mongoose.Schema.ObjectId,
    'ref': "Property",
    'required': [true, "Booking must belong to a Property!"]
  },
  'user': {
    'type': mongoose.Schema.ObjectId,
    'ref': 'User',
    'required': [true, "Booking must belong to a User!"]
  },
  'price': {
    'type': Number,
    'required': [true, "booking must have a time."]
  },
  'createdAt': {
    'type': Date,
    'default': Date.now()
  },
  'paid': {
    'type': Boolean,
    'default': true
  },
  'fromDate': {
    'type': Date
  },
  'toDate': {
    'type': Date
  },
  'guests': {
    'type': Number
  },
  'numberOfnights': {
    'type': Number
  }
}, {
  'timestamps': true
});
bookingSchema.pre(/^find/, function (_0x3c1c26) {
  this.populate("user").populate({
    'path': 'property',
    'select': "maximumGuest location images propertyName address"
  });
  _0x3c1c26();
});
const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;