
$(document).ready(function() {

    let addcourseForm = $('#addcourseForm');

    $(document).on('submit', '#addcourseForm', function(e) {
        e.preventDefault();
  
            var courseFormData = {
                // key         value
                Title: $('#addCourseTitle').val(),
                Description: $('#addCourseDescription').val(),
                Credit: $('#addCourseCredit').val(),
                Fee: $('#addCourseFee').val(),
                StartDate: $('#addStartDate').val(),
                EndDate: $('#addEndDate').val(),
                CourseTypeID: $('#addCourseTypeID').val(),
                TeacherID: $('#addTeacherID').val(),
                RatingID: $('#addRatingID').val(),

            }
            console.log(courseFormData);
            $.ajax({
                url: 'http://localhost:3000/course/register',
                method: 'post',
                contentType: 'application/json',
                data: JSON.stringify(courseFormData),                
                success: function(result, status) {
                    
                    var message = result.message;
                    alert(message);

                    alert("Data ta gayo ni bro.. backend hera");

                },
                error: function(jqXHR, status) {
                    console.log(status);
                    console.log(jqXHR.responseJSON.message);
                    alert('DATA GAYENA');
                }
            });
       
    });


});
        



