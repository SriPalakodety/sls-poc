const { success, failure } = require('../common/apiResponses');
const Dynamo = require('../common/dynamo');

const dynamoTableName = process.env.dynamoTableName;

exports.handler = async event => {
    console.log('event', event);
    if(!event.pathParameters || !event.pathParameters.id) {
        return failure({message: 'missing the id from path'})
    }
    const {id} = event.pathParameters;
    const user = JSON.parse(event.body);
    user.id = id;

    const newUser = await Dynamo.write(user, dynamoTableName).catch(err => {
        console.log('Error in dynamo write: ', err);
        return null;
    });

    if(!newUser) {return failure({message: 'Failed to write user by id'})};
    return success({newUser});
};