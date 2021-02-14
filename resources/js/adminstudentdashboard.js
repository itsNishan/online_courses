function getStudentsList() {
    $.ajax({
        url: 'http://localhost:3000/get/student',
        method: 'get',
        dataType: 'json',
        headers: { authorization: 'Bearer ' + window.localStorage.getItem('token') },
        success: function(result, status) {
            $('#studentsListBody').empty();
            let studentCounts=0;
            for (key in result.info) {
                studentCounts++;
                $('#studentsListBody').append(
                    `
        <tr>
          <th scope="row"> ${result.info[key].id}</th>
          <td>${result.info[key].first_name}</td>
          <td>${result.info[key].last_name}</td>
          <td>${result.info[key].address}</td>
          <td>${result.info[key].phone}</td>
          <td>${result.info[key].dob} Hrs</td>
          <td>${result.info[key].gender}</td>
          <td>${result.info[key].profile_image}</td>
          <td>${result.info[key].email}</td>
          <td>${result.info[key].verify}</td>
          <td><button type="button" id="edit" class="editStudent btn btn-primary" data-id="${result.info[key].id} " data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Edit</button></td>
          <td><button type="button" id="delete" data-id="${result.info[key].id}" class="deleteStudent btn btn-danger">Delete</button></td>
        </tr>
          `
                );    
            }
            $('#totalStudentsNumber').html(`Total Students: ${studentCounts}`);
        },
        error: function(jqXHR, status) {
            console.log(jqXHR);
        }
    })
}

getStudentsList();




//delete student


$(document).ready(function() {
    $(document).on('click', '.deleteStudent', function(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');

        $.ajax({
            url: 'http://localhost:3000/student/delete/' + id,
            method: 'get',
            contentType: 'application/json',
            success: function(result, status) {
                console.log(status);
                alert(result.message);
                window.location.href = "adminstudentdashboard";
            },
            error: function(jqXHR, status) {
                console.log(status);
                console.log(jqXHR.responseJSON.message);
                alert(jqXHR.responseJSON.message);
            }
        });
    });
});
// edit student
$(document).on('click', '.editStudent', function(e) {
    e.preventDefault();
    var id = $(this).attr('data-id');
    $.ajax({
        url: 'http://localhost:3000/get/student/' + id,
        method: 'get',
        contentType: 'application/json',
        success: function(result, status) {
            $('#eFirstName').val(result.info.first_name);
            $('#eLastName').val(result.info.last_name);
            $('#eAddress').val(result.info.address);
            $('#ePhone').val(result.info.phone);
            $('#eDOB').val(result.info.dob);
            $('#ePhone').val(result.info.phone);
            $('#eGender').val(result.info.gender);
            $('#eVerify').val(result.info.verify);
            $('#studentEditSave').attr('data-id', result.info.id);
        },
        error: function(jqXHR, status) {
            console.log(status);
            console.log(jqXHR.responseJSON.message);
        }
    });
});

// edit save button click
$(document).on('click', '#studentEditSave', function(e) {
    e.preventDefault();
    var id = $(this).attr('data-id');
    var studentEditData = {
        // key         value
        FirstName: $('#eFirstName').val(),
        LastName: $('#eLastName').val(),
        Gender: $('#eGender').val(),
        DOB: $('#eDOB').val(),
        Phone: $('#ePhone').val(),
        Address: $('#eAddress').val(),
        Email: $('#eEmail').val(),
        Verify: $('#eVerify').val()
    }
    $.ajax({
        url: 'http://localhost:3000/student/update/'+id,
        method: 'put',
        contentType: 'application/json',
        data: JSON.stringify(studentEditData),
        beforeSend: function() {
        },
        success: function(result, status) {
          alert(result.message);
          window.location.href = "adminstudentdashboard";
        },
        error: function(jqXHR, status) {
            console.log(status);
            console.log(jqXHR.responseJSON.message);
            alert(jqXHR.responseJSON.message);
        }
    });
    
});