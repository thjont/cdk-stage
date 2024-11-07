import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyAppStack } from './my-app-stack';

export type AccountType = "dev" | "prod";

interface StageProps extends cdk.StageProps {
  acType: AccountType;
  tags: { [key: string]: string };
}

export class ProdStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: StageProps) {
    super(scope, id, props);

    new MyAppStack(this, 'MyAppProdStack', {
      env: props.env,
      acType: props.acType,
      tags: {
        ...props.tags,
        'STAGE': 'PROD',
      },
    });
  }
}