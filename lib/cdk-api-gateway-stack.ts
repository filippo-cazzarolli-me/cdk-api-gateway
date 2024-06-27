import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ApiGateway } from './apiGateway';
import { Lambda } from './lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new ApiGateway(this);

    const healthLambda = new Lambda(this, "health");

    api.addIntegration("GET", "/health", healthLambda);

  }
}
