


var id = window.sessionStorage.getItem('course_id'); 


$.ajax({
       url: 'http://localhost:3000/get/course/'+id,
       method: 'get',
       dataType: 'json',
       success: function(result, status) {
        $('#courseImage').attr('src','http://localhost:3000/image/course/'+result.info[0].course_image+'');
        $('#courseTitle').html(result.info[0].title);
        $('#courseShortDescription').html(result.info[0].description);
        $('#courseLongDescription').html(result.info[0].description);
        $('#coursePrice').text(`Nrs. ${result.info[0].fee}`);
        $('#creditHour').html(`Credit:  ${result.info[0].credit} Hours`);

        var rating=Math.floor(result.info[0].rating);
        if (rating===1) {
          alert(rating);
          $('#ratingDescription').append(`
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>
           
            `);
        }
        else if(rating===2){
          $('#ratingDescription').append(`
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span> 
           
            `);
        }else if(rating===3){
          $('#ratingDescription').append(`
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span> 
            `);
        }
        else if(rating===4){
          $('#ratingDescription').append(`
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star"></span>
            `);
        } else if(rating===5){
          $('#ratingDescription').append(`
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
            `);
        }

        if (result.info[0].id===1) {
          $('#courseLister').append(`
             <h6>Introduction to HTML</h6>
      <video width="100%" height="100%" controls>
        <source src="http://localhost:3000/videos/courses/HTML & CSS/Introduction to HTML.WEBM" type="video/WEBM">
      </video>

      <h6>Introduction to CSS</h6>
      <video width="100%" height="100%" controls>
        <source src="http://localhost:3000/videos/courses/HTML & CSS/Introduction to CSS.WEBM" type="video/WEBM">
      </video>

            `);
          
        }
        else if(result.info[0].id===2){
          $('#courseLister').append(`
             <h6>Introduction to JavaScript</h6>
      <video width="100%" height="100%" controls>
        <source src="http://localhost:3000/videos/courses/JavaScript/Introduction to JavaScript.WEBM" type="video/WEBM">
      </video>
            `);
        }

        else if(result.info[0].id===3){
          $('#courseLister').append(`
             <h6>Introduction to Wireframe</h6>
      <video width="100%" height="100%" controls>
        <source src="http://localhost:3000/videos/courses/WireFrame/Introduction to Wire Frame.webm" type="video/WEBM">
      </video>

      <h6>Starting Wire Frame</h6>
      <video width="100%" height="100%" controls>
        <source src="http://localhost:3000/videos/courses/WireFrame/Starting Wire Frame.webm" type="video/WEBM">
      </video>


            `);
        }
        
       },
       error: function(jqXHR, status) {
       }
     });


$.ajax({
       url: 'http://localhost:3000/get/teacher/'+id,
       method: 'get',
       dataType: 'json',
       success: function(result, status) {

        $('#teacherName').html(`Tutor: ${result.info.first_name} ${result.info.last_name}`);

        console.log(result.info.course_image);
      

       },
       error: function(jqXHR, status) {
        console.log(jqXHR);
       }
     });