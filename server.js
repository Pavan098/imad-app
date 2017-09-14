var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user:'motwanipavan',
    database :'motwanipavan19',
    host:'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));

var articles ={
'article-one' : {
 title:'Article-one',
heading:'Article one',
date:'30 august 2017',
content:`


<p This is the first content of my article</p>`
       },
'article-two':{ 
    title:'Article-two',
heading:'Article two',
date:'30 august 2017',
content:`


<p This is the second content of my article</p>`
},
'article-three':{
    title:'Article-three',
heading:'Article three',
date:'30 august 2017',
content:`


<p This is the third content of my article</p>` 
}
};
function createTemplate (data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate =`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
        <style>
            
        </style>
    </head>
<body>
    <div class ="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
        ${content}
        </div>
    </div>
    </body>
</html>
`;
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function (req,res){
    //make a select request
    //return a response with the results
    pool.query('SELECT * FROM test', function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result));
       }
    });
    
});



var counter=0;
app.get('/counter', function (req,res){
   counter = counter +1;
   res.send(counter.toString());
});
var names =[];
app.get('/submit-name/:name', function(req,res){
   //get the name from request object
   var name = req.params.name;
   names.push(name);
   //JSON:javascript object notation
   res.send(JSON.stringify(names));
});


app.get('/:articleName',function (req,res){ //URL :/submit-name?name=xxxxx
    //articleName==article-one
    //articles[articleName]=={} content object for article-one
    var articleName = req.query.articleName;
     res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
