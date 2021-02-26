const { success, failure } = require('../common/apiResponses');

exports.handler = async event => {
    console.log('event', event);
    if(!event.pathParameters || !event.pathParameters.id) {
        // failed w/o an id
        return failure({message: 'missing the id from path'})
    }
    const {id} = event.pathParameters;
    if(data[id]) {
        //return data if it exists
        return success(data[id])
    }
    // return failed as id isn't in data
    return failure({message: 'no id in the data'})

}

const data = {
    1234: {name: 'Anna jones', age: 25, job: 'journalist'},
    5678: {name: 'Chris Smith', age: 52, job: 'teacher'},
    1278: {name: 'Tom Hanks', age: 25, job: 'developer'},
}