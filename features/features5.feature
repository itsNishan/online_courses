Feature: <Get Student Data>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Get student data
    * Get the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                                 | expectval                                         |
      | http://localhost:3000/get/student/1 | {"status": 200,"message": "Student data fetched","info": {"id": 1,"profile_image": null,"first_name": "Abhishek","last_name": "Giri","address": "Nayabazar","phone": "9803332022","dob": "1997-03-02T00:00:00.000Z","gender": "male","verify": "0","email": "abhishekgiri7316@gmail.com","password": "$2b$10$y.JLn/RaQkztzfnh0JHxiOvIB6aTPIxV.QYV3j6aFq8e9kF4PJ5vq","createdAt": "2019-09-25T08:31:10.000Z","updatedAt": "2019-09-25T08:31:10.000Z"}}|