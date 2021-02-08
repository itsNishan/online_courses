Feature: <Admin Login>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Get data
    * Get the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                           | expectval                                                                                                                                                           |
      | http://localhost:3000/users/1 | {   "id": 1,   "name": "Jason",   "location": "USA" }                                                                                                               |
      | http://localhost:3000/users/2 | {   "id": 2,   "name": "John",   "location": "UK" }                                                                                                                 |
      | http://localhost:3000/blogs/1 | {   "id": 1,   "title": "CukeTest Overview",   "body": "CukeTest is an authoring tool for BDD automation test, blah, blah...",   "author": "Jason",   "userId": 1 } |

  # Scenario Outline: Post data
  #   * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
  #   Examples: 
  #     | URL                         | data                                            | expectval                                       |
  #     | http://localhost:3000/users | { "id": 3, "name": "Zack", "location": "CHINA"} | { "id": 3, "name": "Zack", "location": "CHINA"} |
  Scenario Outline: Post admin data
    * Post to service api "<URL>" with '<data>' and I should get the '<expectval>'
    * 
    Examples: 
      | URL                               | data                                            | expectval                                                   |
      | http://localhost:3000/admin/login | { "Email": "abhishekgiri7316@gmail.com", "Password": "12"} | { "status": 200, "message": "Admin logged in", "token": ""} |