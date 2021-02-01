const { Given, When, Then } = require('cucumber');
const got = require('got');
const assert = require('assert');

var jsonFormat = {
    headers: { 'Content-Type': 'application/json' },
    json: true
};

///// Your step definitions /////
Given('Get the service api {string} and i should get the {string}', async function (url, expectval) {
    result = await got.get(url, jsonFormat);

    var data = result.body;
    var assertdata = JSON.parse(expectval);
    return assert.deepEqual(data, assertdata);
});


Given("Post to service api {string} with {string} and I should get the {string}", async function (url, data, expectval) {
    var option = {
        headers: { 'Content-Type': 'application/json' },
        json: true,
        body: JSON.parse(data)
    };

    res = await got.post(url, option);
    var data = res.body;
    var assertdata = JSON.parse(expectval);
    return assert.deepEqual(data, assertdata);
});

When(/^send PUT request to "([^"]*)", the data is$/, async function (arg1, docString) {

    var data = {
        headers: { 'Content-Type': 'application/json' },
        json: true,
        body: JSON.parse(docString)
    };
    await got.put(url, data);
});


Then(/^send GET request to "([^"]*)", user name should be "([^"]*)"$/, async function (url, name) {
        let res = await got.get(url);
        let json = JSON.parse(res.body);
        return assert.equal(json.name, name);

});


Then(/^Put to service api "([^"]*)" with '([^']*)' and I should get the '([^']*)'$/, async function (url, data, expectval) {
    var option = {
        headers: { 'Content-Type': 'application/json' },
        json: true,
        body: JSON.parse(data)
    };

    res = await got.put(url, option);
    var data = res.body;
    var assertdata = JSON.parse(expectval);
    return assert.deepEqual(data, assertdata);
});