/* eslint-disable max-classes-per-file */
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';

export class BucketStack extends cdk.Stack {
  // 👇 set a property for the bucket
  public readonly bucket: s3.Bucket;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 👇 assign an S3 bucket to the class property
    this.bucket = new s3.Bucket(this, 'my-bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}

interface LambdaStackProps extends cdk.StackProps {
  bucket: s3.Bucket;
}

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    const {bucket} = props;

    // 👇 tag the shared bucket
    cdk.Tags.of(bucket).add('environment', 'staging');
    cdk.Tags.of(bucket).add('department', 'accounting');

    const lambdaFunction = new lambda.Function(this, 'lambda-function', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.main',
      code: lambda.Code.fromAsset(path.join(__dirname, '/../src/my-lambda')),
      environment: {
        // 👇 pass bucket name to lambda
        BUCKET_NAME: bucket.bucketName,
      },
    });
  }
}
