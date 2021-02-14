

function getCoursesList(){
    $.ajax({
           url: 'http://localhost:3000/get/courset',
           method: 'get',
           dataType: 'json',
           headers: { authorization: 'Bearer '+window.localStorage.getItem('token') },
           success: function(result, status) {
            console.log(result.info);
            $('#coursesListBody').empty();
            let courseCounts=0;
            for(key in result.info){
              $('#coursesListBody').append(            
              `
            <tr>
              <th scope="row"> ${result.info[key].id}</th>
              <td>${result.info[key].title}</td>
              <td>${result.info[key].description}</td>
              <td>${result.info[key].credit} Hrs</td>
              <td>$ ${result.info[key].fee}</td>
              <td>${result.info[key].course_image}</td>
              <td>${result.info[key].coursetype_title}</td>
              <td>${result.info[key].first_name} ${result.info[key].last_name}</td>
              <td><button type="button" id="edit" data-toggle="modal" data-target="#exampleModal" data-id="${result.info[key].id}" class="editCourse btn btn-primary">Edit</button></td>
              <td><button type="button" id="delete" data-id="${result.info[key].id}" class="deleteCourse btn btn-danger">Delete</button></td>
            </tr>
              `
                  );
              courseCounts++;
            }
            $('#totalCoursesNumber').html(`Total Courses: ${courseCounts}`);
           },
           error: function(jqXHR, status) {
            console.log(jqXHR);
           }
       })
    }
    
    getCoursesList();

    //delete Courses

    $(document).ready(function() {
        $(document).on('click', '.deleteCourse', function(event) {
            event.preventDefault();
            var id = $(this).attr('data-id');
            $.ajax({
                url: 'http://localhost:3000/course/delete/' + id,
                method: 'get',
                contentType: 'application/json',
                success: function(result, status) {
                    console.log(status);
                    alert(result.message);
                    window.location.href = "coursedashboard";
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
    $(document).on('click', '.editCourse', function(e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        $.ajax({
            url: 'http://localhost:3000/get/course/' + id,
            method: 'get',
            contentType: 'application/json',
            success: function(result, status) {
                console.log(result.info);
                $('#eCourseTitle').val(result.info[0].title);
                $('#eCourseDescription').val(result.info[0].description);
                $('#eCredit').val(result.info[0].credit);
                $('#eFee').val(result.info[0].fee);
                
                $('#courseEditSave').attr('data-id', result.info[0].id);
            },
            error: function(jqXHR, status) {
                console.log(status);
                console.log(jqXHR.responseJSON.message);
            }
        });
    });
    
    // edit save button click
    $(document).on('click', '#courseEditSave', function(e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        var courseEditData = {
            // key         value
            Title: $('#eFirstName').val(),
            Description: $('#eLastName').val(),
            Credit: $('#eGender').val(),
            Fee: $('#eDOB').val(),
           
        }
        $.ajax({
            url: 'http://localhost:3000/course/update/'+id,
            method: 'put',
            contentType: 'application/json',
            data: JSON.stringify(courseEditData),
            beforeSend: function() {
            },
            success: function(result, status) {
              alert(result.message);
              window.location.href = "coursedashboard";
            },
            error: function(jqXHR, status) {
                console.log(status);
                console.log(jqXHR.responseJSON.message);
                alert(jqXHR.responseJSON.message);
            }
        });
        
    });
    
    
    