Feature: <Course Register>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Post course register
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                    | data                                                                                                                                                                              | expectval                                             |
      | http://localhost:3000/course/register | { "Title":"Android","Description":"loremipsum","Credit":"110","Fee":"25000","CourseImage":"asd.jpg","StartDate":"2020-12-07","EndDate":"2021-02-02","CourseTypeID":"1","TeacherID":"1"} | { "status": 200, "message":
      