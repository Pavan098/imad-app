
//submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
   var request = new XMLHttpRequest(); 
  
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status === 200)
        {
               //capture a list of names and render it as a list
               console.log('user logged in');
               alert('logged in sucessfully');
        
        }else if(request.status === 403)
    { alert('username/password is incorrect');
        }else if (request.status === 500){
            alert('something went wrong on the server');
        }
    }  
      //not done yet
  };
  
  //make the request
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username);
  consoloe.log(password);
  var name = nameInput.value;
  request.open('POST','http://motwanipavan19.imad.hasura-app.io/login',true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({ username:username,password:password})); //make a request to server and send the name
   //capture a list of names and render it as a list
   
} ;