#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DevStage } from '../lib/dev-stage';
import { ProdStage } from '../lib/prod-stage';

const app = new cdk.App();

new DevStage(app, 'DevStage', {
  env: { account: '1234567890', region: 'eu-west-2' },
  acType: 'dev',
  tags: {
    'DIVISION': 'GROUP',
    'SERVICE': 'myapp',
    'OWNER': 'devops@example.com',
    'REPO': 'https://github.com/thjont/cdk-stack',
  },
});

// Define the prod stage
new ProdStage(app, 'ProdStage', {
  env: { account: '0987654321', region: 'eu-west-2' },
  acType: 'prod',
  tags: {
    'DIVISION': 'GROUP',
    'SERVICE': 'myapp',
    'OWNER': 'devops@example.com',
    'REPO': 'https://github.com/thjont/cdk-stack',
  },
});
