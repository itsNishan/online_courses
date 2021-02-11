Feature: <Student Update>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Put student update
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                    | data                                                                                                                                         | expectval                                           |
      | http://localhost:3000/student/update/1 | { "FirstName":"Abhishek","LastName":"Giri","Address":"Nayabazar","DOB":"1997-12-03","Phone":"9803332022","Gender":"male","Email":"abhishekgiri7316@gmail.com" } | { "status": 200, "message": "student data updated"} |