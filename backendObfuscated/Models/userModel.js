// function _0x3da4(){const _0x4873cc=['passwordChangedAt','toString','digest','update','password','validator','passwordResetToken','3sQBAXe','save','methods','createPasswordResetToken','password\x20are\x20not\x20same\x20!','hex','581TbcdGT','120533yZdHuZ','7761978JOSlca','Please\x20enter\x20your\x20email','isModified','26323MKyrlh','pre','Please\x20enter\x20valid\x20email\x20address','4572720VuDEOa','randomBytes','5iaqswl','isEmail','createHash','passwordConfirm','Please\x20enter\x20your\x20name','compare','crypto','2277620HNlARn','6940lCHYHr','getTime','bcryptjs','Schema','mongoose','3368004mdOXMT','sha256','5232bBmwCG'];_0x3da4=function(){return _0x4873cc;};return _0x3da4();}const _0xc1b837=_0x110a;(function(_0x940ac8,_0x516e12){const _0x237756=_0x110a,_0x5409b1=_0x940ac8();while(!![]){try{const _0x2f5987=-parseInt(_0x237756(0x89))/0x1+parseInt(_0x237756(0x72))/0x2+parseInt(_0x237756(0x82))/0x3*(parseInt(_0x237756(0x78))/0x4)+parseInt(_0x237756(0x6b))/0x5*(parseInt(_0x237756(0x8a))/0x6)+parseInt(_0x237756(0x88))/0x7*(-parseInt(_0x237756(0x7a))/0x8)+-parseInt(_0x237756(0x90))/0x9+-parseInt(_0x237756(0x73))/0xa*(parseInt(_0x237756(0x8d))/0xb);if(_0x2f5987===_0x516e12)break;else _0x5409b1['push'](_0x5409b1['shift']());}catch(_0x1052b9){_0x5409b1['push'](_0x5409b1['shift']());}}}(_0x3da4,0xe3415));const mongoose=require(_0xc1b837(0x77)),validator=require(_0xc1b837(0x80)),bcrypt=require(_0xc1b837(0x75)),crypto=require(_0xc1b837(0x71)),userSchema=new mongoose[(_0xc1b837(0x76))]({'name':{'type':String,'required':[!![],_0xc1b837(0x6f)]},'email':{'type':String,'required':[!![],_0xc1b837(0x8b)],'unique':!![],'lowercase':!![],'validate':[validator[_0xc1b837(0x6c)],_0xc1b837(0x8f)]},'password':{'type':String,'required':[!![],'Please\x20enter\x20your\x20password'],'minlength':[0x6,'Your\x20password\x20must\x20be\x20longer\x20than\x206\x20characters'],'select':![]},'passwordConfirm':{'type':String,'required':[!![],'Please\x20confirm\x20your\x20password'],'validate':function(_0xe8a555){const _0x4997f2=_0xc1b837;return _0xe8a555===this[_0x4997f2(0x7f)];},'message':_0xc1b837(0x86)},'phoneNumber':{'type':String,'required':!![],'unique':!![]},'avatar':{'url':{'type':String},'public_id':{'type':String}},'passwordChangedAt':{'type':Date},'passwordResetToken':String,'passwordResetExpires':Date},{'timestamps':!![]});function _0x110a(_0x306c34,_0x1c574d){const _0x3da475=_0x3da4();return _0x110a=function(_0x110a25,_0x1378ce){_0x110a25=_0x110a25-0x6b;let _0xf2b9d7=_0x3da475[_0x110a25];return _0xf2b9d7;},_0x110a(_0x306c34,_0x1c574d);}userSchema[_0xc1b837(0x8e)](_0xc1b837(0x83),async function(_0x3e895c){const _0x3a4ad5=_0xc1b837;if(!this[_0x3a4ad5(0x8c)](_0x3a4ad5(0x7f)))return _0x3e895c();this[_0x3a4ad5(0x7f)]=await bcrypt['hash'](this[_0x3a4ad5(0x7f)],0xc),this[_0x3a4ad5(0x6e)]=undefined,_0x3e895c();}),userSchema[_0xc1b837(0x84)]['correctPassword']=async function(_0x79027e,_0x2d93c9){const _0x6c1d99=_0xc1b837;return await bcrypt[_0x6c1d99(0x70)](_0x79027e,_0x2d93c9);},userSchema[_0xc1b837(0x84)]['changedPasswordAfter']=function(_0x3cb883){const _0x581609=_0xc1b837;if(this[_0x581609(0x7b)]){const _0x50d61a=parseInt(this[_0x581609(0x7b)][_0x581609(0x74)]()/0x3e8,0xa);return _0x3cb883<_0x50d61a;}return![];},userSchema['methods'][_0xc1b837(0x85)]=function(){const _0x5b47cd=_0xc1b837,_0x397d4e=crypto[_0x5b47cd(0x91)](0x20)[_0x5b47cd(0x7c)](_0x5b47cd(0x87));return this[_0x5b47cd(0x81)]=crypto[_0x5b47cd(0x6d)](_0x5b47cd(0x79))[_0x5b47cd(0x7e)](_0x397d4e)[_0x5b47cd(0x7d)](_0x5b47cd(0x87)),this['passwordResetExpires']=Date['now']()+0xa*0x3c*0x3e8,_0x397d4e;};const User=mongoose['model']('User',userSchema);module['exports']=User;

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  'name': {
    'type': String,
    'required': [true, "Please enter your name"]
  },
  'email': {
    'type': String,
    'required': [true, "Please enter your email"],
    'unique': true,
    'lowercase': true,
    'validate': [validator.isEmail, "Please enter valid email address"]
  },
  'password': {
    'type': String,
    'required': [true, "Please enter your password"],
    'minlength': [0x6, "Your password must be longer than 6 characters"],
    'select': false
  },
  'passwordConfirm': {
    'type': String,
    'required': [true, "Please confirm your password"],
    'validate': function (_0xe8a555) {
      return _0xe8a555 === this.password;
    },
    'message': "password are not same !"
  },
  'phoneNumber': {
    'type': String,
    'required': true,
    'unique': true
  },
  'avatar': {
    'url': {
      'type': String
    },
    'public_id': {
      'type': String
    }
  },
  'passwordChangedAt': {
    'type': Date
  },
  'passwordResetToken': String,
  'passwordResetExpires': Date
}, {
  'timestamps': true
});
userSchema.pre("save", async function (_0x3e895c) {
  if (!this.isModified("password")) {
    return _0x3e895c();
  }
  this.password = await bcrypt.hash(this.password, 0xc);
  this.passwordConfirm = undefined;
  _0x3e895c();
});
userSchema.methods.correctPassword = async function (_0x79027e, _0x2d93c9) {
  return await bcrypt.compare(_0x79027e, _0x2d93c9);
};
userSchema.methods.changedPasswordAfter = function (_0x3cb883) {
  if (this.passwordChangedAt) {
    const _0x50d61a = parseInt(this.passwordChangedAt.getTime() / 0x3e8, 0xa);
    return _0x3cb883 < _0x50d61a;
  }
  return false;
};
userSchema.methods.createPasswordResetToken = function () {
  const _0x397d4e = crypto.randomBytes(0x20).toString("hex");
  this.passwordResetToken = crypto.createHash("sha256").update(_0x397d4e).digest("hex");
  this.passwordResetExpires = Date.now() + 600000;
  return _0x397d4e;
};
const User = mongoose.model('User', userSchema);
module.exports = User;