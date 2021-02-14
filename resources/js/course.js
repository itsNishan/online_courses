function getCourseData(){
    $.ajax({
           url: 'http://localhost:3000/get/courset',
           method: 'get',
           dataType: 'json',
           success: function(result, status) {
            $('#coursesContainerID').empty();
            for(key in result.info){
              console.log(result.info[key]);
              
    
             $('#coursesContainerID').append(
              `
              <div class="courseBlockContainer">
                <a href="" class="courseBlock" data-id="${result.info[key].id}">
                  <div class="courseImage">
                    <img style="height:175px" src="http://localhost:3000/image/course/${result.info[key].course_image}">   
                  </div>
    
                  <div class="courseTitle">
                    ${result.info[key].title} 
                  </div>
                  <div class="courseCredit">
                    Credit: <span class="courseCreditDynamic">${result.info[key].credit} Hours </span>
                  </div>
                  <div class="courseTeacher">
                    By: <span class="courseTeacherDynamic"> ${result.info[key].first_name} ${result.info[key].last_name} </span>
                  </div>
                 
                  <div class="coursePrice">
                    <span class="coursePriceDynamic">Nrs ${result.info[key].fee}</span>
                  </div>
    
    
                   <div class="rating" id="${result.info[key].id}">
                    <span class="ratingDynamic">
                      <span id="b1${result.info[key].id}"></span>
                      <span id="b2${result.info[key].id}"></span>
                      <span id="b3${result.info[key].id}"></span>
                      <span id="b4${result.info[key].id}"></span>
                      <span id="b5${result.info[key].id}"></span> 
                    </span>
                  </div>
                </a>          
              </div>
              `
              );
    
            }
            for(key in result.average){
              
              var rating = Math.floor(result.average[key].rating);
              if(rating >= 1){$('#b1'+result.average[key].courseID).html('<span class="fa fa-star checked"></span>');}
              else{$('#b1').html('<span class="fa fa-star"></span>')}
                if(rating >= 2){$('#b2'+result.average[key].courseID).html('<span class="fa fa-star checked"></span>');}
              else{$('#b2').html('<span class="fa fa-star"></span>')}
                if(rating >= 3){$('#b3'+result.average[key].courseID).html('<span class="fa fa-star checked"></span>');}
              else{$('#b3').html('<span class="fa fa-star"></span>')}
                if(rating >= 4){$('#b4'+result.average[key].courseID).html('<span class="fa fa-star checked"></span>');}
              else{$('#b4').html('<span class="fa fa-star"></span>')}
                if(rating >= 5){$('#b5'+result.average[key].courseID).html('<span class="fa fa-star checked"></span>');}
              else{$('#b5').html('<span class="fa fa-star"></span>')}
            }
           },
           error: function(jqXHR, status) {
            console.log(jqXHR);
           }
       })
    }
    
    getCourseData();
    
    
    $(document).on('click', '.courseBlock', function(e){
      e.preventDefault();
      var id = $(this).attr('data-id');
      window.sessionStorage.setItem('course_id', id);
      window.location.href = "coursedescription";
    });
    
    
    
    
    
    