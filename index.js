const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.json({
      test:'pewpew',
      worstsuperhero:'superman'
  })
})
 

app.post('/posttest',function(req,res){
  console.log(req.body.name)
  if(req.body.name=="Norbi")
  {
    res.status(200).send("he does jiu jitsu")
  }
  else
  {
    res.status(200).send("he/she does not do jiu jitsu")
  }
  
})

app.listen(process.env.PORT||3000)