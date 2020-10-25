const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
const hbs = require('hbs')
app.use(express.static(__dirname + '/res'));

// Middleware WorkTime
const workTime = (req, res, next) => {
    let time = new Date();
    if (
      time.getDay() > 0 &&
      time.getDay() <= 5 &&
      time.getHours() >= 9 &&
      time.getHours() <= 17 
    ) {
      next();
    } else res.render("closed.hbs",
    {style: "style.css",
    image:"closed.jpg"},);
  };
  app.use(workTime);


app.set('view engine',hbs)

// HOME
app.get("/home", (req, res) => {
    res.render("home.hbs",
    {style: "style.css",
    image:"welcome.jpg"},
);
  });

  // CONTACT
  app.get("/contact", (req, res) => {
    res.render("contact.hbs", 
    {style: "style.css"});
  });
  
//SERVICE
app.get("/service" , (req,res)=>{
res.render("service.hbs",
{style:"style.css"})
});

//CLOSED
app.get("/closed", (req, res) => {
    res.render("closed.hbs",
    {style: "style.css",
    image:"closed.jpg"},
);
  });


app.listen(PORT, ()=> console.log(`server is running on port: ${PORT}`)) ;