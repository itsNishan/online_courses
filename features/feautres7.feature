Feature: <Get Course Data>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Get course data
    * Get the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                                | expectval                                                                                                                                                                                                                                                                                                                           |
      | http://localhost:3000/get/course/1 | { "status": 200,"message": "Course data fetched","info": {"id": 1,"title":"Java","description":"this is good course","credit":20,"fee":2000,"course_image":"abc.jpg","start_date":"2020-12-07T13:03:47.000Z","end_date":"2021-02-02T13:03:47.000Z","createdAt": "2020-12-07T13:03:47.000Z","updatedAt": "2020-12-10T13:03:47.000Z"} |