// for LOGIN
$(document).ready(function() {

    $(document).on('submit', '#adminLoginForm', function(event){
      event.preventDefault();
     const myFormData = {
        Email : $('#adminEmail').val(),
        Password : $('#adminPassword').val(),
    }
    console.log(myFormData);
    $.ajax({
            url: 'http://localhost:3000/admin/login',
            method: 'post',
            contentType: 'application/json',
            data: JSON.stringify(myFormData),
            success: function(result, status) {
               window.localStorage.setItem('token', result.token);
               alert(result.message);
               window.location.href = "admindashboard";
    },
            error: function(jqXHR, status) {
              alert(jqXHR.responseJSON.message);
                console.log(jqXHR.responseJSON.message);
            }
        });
    });
    $(document).on('click','#closeAdminBtn',function(event){
      event.preventDefault();
      window.location.href="index";
    });
    $(document).on('click','#closeAdmin',function(event){
      event.preventDefault();
      window.location.href="index";  
    });
    });
  
  