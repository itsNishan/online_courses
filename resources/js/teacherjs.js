


$(document).ready(function() {
  
       let teacherRegisterFormData=$('#teacherRegisterFormData');
       let loginForm=$('#loginForm');
  
  
      $(document).on('submit', '#teacherSignupForm', function(e) {
          e.preventDefault();
        console.log("BOOM");
  
          var password = $('#teacherPassword').val();
          var cpassword = $('#teacherConfirmPassword').val();
          if (password == cpassword) {
              var gender = $("input[name='gender']:checked").val();
              var signupInputs=$('.signupInputs');
  
              var teacherRegisterFormData = {
                  // key         value
                  FirstName: $('#teacherFirstName').val(),
                  LastName: $('#teacherLastName').val(),
                  Gender: gender,
                  DOB: $('#teacherDOB').val(),
                  Phone: $('#teacherPhone').val(),
                  Address: $('#teacherAddress').val(),
                  Bio:$('#teacherBio').val(),
                  Email: $('#teacherEmail').val(),
                  Password: password
              }
              $.ajax({
                  url: 'http://localhost:3000/teacher/register',
                  method: 'post',
                  contentType: 'application/json',
                  data: JSON.stringify(teacherRegisterFormData),
                  success: function(result, status) {
                     
             
                  $("input[name='gender']").prop("unchecked",true);
                  $("#signupForm").css("display", "none");
                  $("#loginForm").css("display", "flex");
                  $("#loginEmail").focus();
  
                  },
  
                  error: function(jqXHR, status) {
                      console.log(status);
                      console.log(jqXHR.responseJSON.message);
                
                      alert(jqXHR.responseJSON.message);
                  }
              });
          }
          else{
              $(StudentPassword).addClass("errorInput");
              $(StudentPassword).focus();
  
          }
      });
  
  
   // for LOGIN
    $(document).on('submit', '#loginForm', function(event){
      event.preventDefault();
     const myFormData = {
        Email : $('#loginEmail').val(),
        Password : $('#loginPassword').val(),
    }
    console.log(myFormData);
    $.ajax({
            url: 'http://localhost:3000/student/login',
            method: 'post',
            contentType: 'application/json',
            data: JSON.stringify(myFormData),
            success: function(result, status) {

               window.localStorage.setItem('token', result.token);

               alert("I M TEACHER");
               
               $('#login').text("LogOut");
            },
            error: function(jqXHR, status) {
              alert(jqXHR.responseJSON.message);
                console.log(jqXHR.responseJSON.message);
            }
        });
    });
  
  
  
  
  });
  
  
  