const { success, failure } = require('../common/apiResponses');
const Dynamo = require('../common/dynamo');

const dynamoTableName = process.env.dynamoTableName;

exports.handler = async event => {
    console.log('event', event);
    if(!event.pathParameters || !event.pathParameters.id) {
        return failure({message: 'missing the id from path'})
    }
    const {id} = event.pathParameters;
    const user = await Dynamo.get(id, dynamoTableName).catch(err => {
        console.log('error in dynamo GET', err);
        return null;
    })
    if(!user) {return failure({message: 'Failed to get user by id'})};
    return success({user})

}