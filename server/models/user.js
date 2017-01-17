var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var UserSchema =new Schema(
  {
    username:{type:String,unique:true,required:true},
    password:{ type:String,required:true}

  },
  {
     timestamps:true
  }
)
UserSchema.pre('save',function(next){
  var user = this,SALT_FACTOR =5;
  bcrypt.genSalt(SALT_FACTOR,function(err,salt){
    if(err) return next(err);
    bcrypt.hash(user.password,salt,null,function(err,hash){
      if(err) return next(err);
      user.password = hash;
      next()
    })
  })
})
module.exports = mongoose.model('User', UserSchema);
