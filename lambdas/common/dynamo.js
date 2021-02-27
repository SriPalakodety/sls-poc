const AWS = require('aws-sdk');
const { write } = require('fs');
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
            throw Error(`There was an error fetching the data for id ${id} from ${TableName}`);
        }
        return data.Item;
    },

    async write(data, TableName) {
        if(!data.id) {
            throw Error('no id on the data');
        }
        const params = {
            TableName,
            Item: data
        }
        const res = await documentClient.put(params).promise();
        if(!res) {
            throw Error(`There was an error writing the data for id ${data.id} into ${TableName}`);
        }
        return data;
    }
}

module.exports = dynamo;