import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs"
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";
import * as path from "path";

export class Lambda extends NodejsFunction {
    constructor(scope: Construct, fileName: string) {
        super(scope, fileName, {
            architecture: Architecture.X86_64,
            runtime: Runtime.NODEJS_20_X,
            entry: path.join(__dirname, `../backend/lambda/${fileName}.ts`),
            logRetention: RetentionDays.ONE_WEEK
        });
    }
}