Feature: API Testing Exercise
Call API to change user name

  Scenario: Change user name
    When send PUT request to "http://127.0.0.1:3000/users/1", the data is
      """
      {
      "name":"Abhishek"
      }
      """
    Then send GET request to "http://127.0.0.1:3000/users/1", user name should be "Abhishek"