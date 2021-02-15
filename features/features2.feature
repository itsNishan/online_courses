Feature: <Delete Student>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Delete student account
    * Delete the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                                    | expectval                                    |
      | http://localhost:3000/student/delete/2 | { "status":200,"message":"Student deleted" } |