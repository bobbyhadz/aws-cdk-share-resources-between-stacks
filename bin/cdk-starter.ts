#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {BucketStack, LambdaStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();

const bucketStack = new BucketStack(app, 'bucket-stack', {
  stackName: 'bucket-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const lambdaStack = new LambdaStack(app, 'lambda-stack', {
  // 👇 pass the S3 bucket from the other stack
  bucket: bucketStack.bucket,
  stackName: 'lambda-stack',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
