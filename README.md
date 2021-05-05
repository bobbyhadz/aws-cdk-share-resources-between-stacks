# How to share Resources between Stacks in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/aws-cdk-share-resources-between-stacks)

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Deploy the stacks in the following order

```bash
npx cdk deploy bucket-stack

npx cdk deploy lambda-stack
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   default region

5. Cleanup - Delete the stacks in the following order

```bash
npx cdk destroy lambda-stack

npx cdk destroy bucket-stack
```
