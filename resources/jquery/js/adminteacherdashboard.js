function getCoursesList(){
    $.ajax({
           url: 'http://localhost:3000/get/teacher',
           method: 'get',
           dataType: 'json',
           headers: { authorization: 'Bearer '+window.localStorage.getItem('token') },
           success: function(result, status) {
            console.log(result.info);
            $('#teachersListBody').empty();
            let teacherCounts=0;
            for(key in result.info){
              $('#teachersListBody').append(            
              `
            <tr>
              <th scope="row"> ${result.info[key].id}</th>
              <td>${result.info[key].first_name}</td>
              <td>${result.info[key].last_name}</td>
              <td>${result.info[key].dob} </td>
              <td>${result.info[key].gender}</td>
              <td>${result.info[key].phone}</td>
              <td>${result.info[key].address}</td>
              <td>${result.info[key].email}</td>
              <td>${result.info[key].profile_image}</td>
              <td>${result.info[key].bio}</td>
              <td>${result.info[key].verify}</td>
              <td><button type="button" id="edit" data-toggle="modal" data-target="#exampleModal" data-id="${result.info[key].id}" class="editTeacher btn btn-primary">Edit</button></td>
              <td><button type="button" id="delete" data-id="${result.info[key].id}" class="deleteTeacher btn btn-danger ">Delete</button></td>
            </tr>
              `
                  );
              teacherCounts++;
            }
            $('#totalTeacherNumber').html(`Total Teachers: ${teacherCounts}`);
           },
           error: function(jqXHR, status) {
            console.log(jqXHR);
           }
       })
    }
    
    getCoursesList();
    
    
    ///delete teacher
    
    
    $(document).ready(function(){
        $(document).on('click', '.deleteTeacher', function(event) {
            event.preventDefault();
            var id = $(this).attr('data-id');
    
            alert(id);
            $.ajax({
                    url: 'http://localhost:3000/teacher/delete/:'+id,
                    method: 'get',
                    contentType: 'application/json',
                    success: function(result, status) {
                        console.log(status);
                        alert(result.message);
                        window.location.href = "adminteacherdashboard";
                    },
                    error: function(jqXHR, status) {
                        console.log(status);
                        console.log(jqXHR.responseJSON.message);
                        alert(jqXHR.responseJSON.message);
                    }
                });
        });
    });
    
    
    
    // edit teacher
    $(document).on('click', '.editTeacher', function(e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        $.ajax({
            url: 'http://localhost:3000/get/teacher/' + id,
            method: 'get',
            contentType: 'application/json',
            success: function(result, status) {
                alert(id);
                $('#eFirstName').val(result.info.first_name);
                $('#eLastName').val(result.info.last_name);
                $('#eAddress').val(result.info.address);
                $('#ePhone').val(result.info.phone);
                $('#eDOB').val(result.info.dob);
                $('#ePhone').val(result.info.phone);
                $('#eGender').val(result.info.gender);
                $('#eVerify').val(result.info.verify);
                $('#eEmail').val(result.info.email);
                $('#eBio').val(result.info.bio);
                $('#teacherEditSave').attr('data-id', result.info.id);
            },
            error: function(jqXHR, status) {
                console.log(status);
                console.log(jqXHR.responseJSON.message);
            }
        });
    });
    
    
    // edit save button click
    $(document).on('click', '#teacherEditSave', function(e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        var teacherEditData = {
            // key         value
            FirstName: $('#eFirstName').val(),
            LastName: $('#eLastName').val(),
            Gender: $('#eGender').val(),
            DOB: $('#eDOB').val(),
            Phone: $('#ePhone').val(),
            Address: $('#eAddress').val(),
            Email: $('#eEmail').val(),
            Bio: $('#eBio').val(),
            Verify: $('#eVerify').val()
        }
        $.ajax({
            url: 'http://localhost:3000/teacher/update/'+id,
            method: 'put',
            contentType: 'application/json',
            data: JSON.stringify(teacherEditData),
            beforeSend: function() {
            },
            success: function(result, status) {
              alert(result.message);
              window.location.href = "adminteacherdashboard";
            },
            error: function(jqXHR, status) {
                console.log(status);
                console.log(jqXHR.responseJSON.message);
                alert(jqXHR.responseJSON.message);
            }
        });
        
    });
    
    
    