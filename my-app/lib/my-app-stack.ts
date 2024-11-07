import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export type AccountType = "dev" | "prod";

interface StackProps extends cdk.StackProps {
  readonly acType: AccountType;
}

export class MyAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MyAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
