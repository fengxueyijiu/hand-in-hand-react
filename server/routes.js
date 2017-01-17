var User = require('./models/user');
var jwt = require('jsonwebtoken');
var secret = require('./config').secret
var generateToken = function(user){
  return jwt.sign(user,secret,{
    expiresIn:3000
  })
}
module.exports = function(app){
  app.post('/auth/login',function(req,res){
    User.findOne({username:req.body.username},function(err,user){
      user.comparePassword(req.body.password,function(err,isMatch){
        if(!isMatch){
          return res.status(403).json({error:'密码错误'})
        }
        return res.json({
          token:generateToken({name:user.username}),
          user:{name:user.username}
        })
      })
    })
  })
}
