Feature: <Course Update>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Put course update
    * Put to service api "<URL>" with '<data>' and I should get the '<expectval>'
    Examples: 
      | URL                                   | data                                                                                                                          | expectval                                          |
      | http://localhost:3000/course/update/1 | { "Title":"Android","Description":"loremipsum","Credit":"110","Fee":"25000","StartDate":"2020-12-07","EndDate":"2021-02-02" } | { "status": 200, "message": "course data updated"} |