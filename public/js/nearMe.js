$('#sign-submit').on('click', function(event)
{
  event.preventDefault();

  const signInEmail = $('#sign-email').val().trim();
  const signInPassword = $('#sign-password').val().trim();

$.ajax({
  url: '/api/users',
  method: 'GET'
}).then(function(data){
console.log(data[0].last_name);

for(let i = 0; i < data.length; i++)
{
  if(signInPassword === data[i].password && signInEmail === data[i].email)
    { 
      $('#modal3-body').append(`<b>Student ID</b>:  ${data[i].id}<br/>`);
      $('#modal3-body').append(`<b>Name</b>:  ${data[i].first_name} ${data[i].last_name}<br/>`);
      $('#modal3-body').append(`<b>E-mail Address</b>:  ${data[i].email}<br/>`);
      $('#modal3-body').append('<br/>');  

      alert('You are signed in!');
    }
    
    else
    {
     alert('Incorrect e-mail or password, please try again!');
     return;
    }
   
}

});

clearSigninForm();
});


//registration info post to server
$('#reg-submit').on('click', function(event)
{
event.preventDefault();


const firstname = $('#reg-firstname').val();
const lastname = $('#reg-lastname').val();
const email =  $('#reg-email').val();
const password =  $('#reg-password').val();
const password2 = $('#reg-password2').val();

const updateInfo = {
  first_name: firstname.toUpperCase(),
  last_name:  lastname.toUpperCase(),
  email:     email,
  password:   password
};

if(email.indexOf("@") !== -1 && password === password2)
{
  $.ajax({
  url: '/',
  method: 'POST',
  data: updateInfo
}).then(function(res)
{ });

regformFunction();
alert('Congratulations! You are registered!');
}

else{
  alert('Passwords do not match or e-mail is invalid, please check and try again!');
    }
});

function regformFunction() {
  document.getElementById("reg-form").reset();
}

function clearSigninForm(){
  document.getElementById("sign-inForm").reset();
}