const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

const dynamo = {
    async get(id, TableName) {
        const params = {
            TableName,
            Key: {
                id
            }
        }
        const data = await documentClient.get(params).promise();
        if(!data || !data.Item) {
            throw Error(`There was an error fetching the data for id ${id} from ${TableName}`)
        }
        console.log(data);
        return data.Item
    }
}

module.exports = dynamo;