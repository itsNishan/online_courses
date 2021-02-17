Feature: <Get Teacher Data>
This is a restful api service test project.
You can use json-mock as an api server. Before runing the script, please init the mock message and start the json-mock server. It can be found in your project's node_modules folder. 
Steps:
1. in command prompt, browse to your project folder,
2. run the following command:
    node_modules\.bin\json-mock.cmd data.json

  Scenario Outline: Get teacher data
    * Get the service api "<URL>" and i should get the '<expectval>'
    Examples: 
      | URL                                 | expectval                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
      | http://localhost:3000/get/teacher/1 | { "status": 200,"message": "Teacher data fetched","info": {"status": 200,"message": "Teacher data fetched","info": {"id": 1,"first_name": "Abhishek","last_name": "Giri","dob": "1997-12-03T00:00:00.000Z","gender": "male","phone": "9803332022","address": "Nayabazar","email": "abhishekgiri7316@gmail.com","profile_image": null,"bio": "Loremipsum","verify": "0","password": "$2b$10$0BTH5Mv19wQsi3dcypHdHuFDhuJNFpBwpSoxXi.12k.fIAdsxe5NS","studentID": 1,"createdAt": "2019-09-30T05:07:22.000Z","updatedAt": "2019-09-30T05:07:22.000Z"}} |