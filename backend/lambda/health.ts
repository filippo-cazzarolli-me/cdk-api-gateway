import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    console.log("Health lamda called", event);

    return {
        statusCode: 200,
        body: "OK"
    };
}