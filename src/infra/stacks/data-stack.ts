import { Stack, StackProps } from 'aws-cdk-lib'
import { AttributeType, Table as DynamoDbTable, ITable } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { getSuffixFromStack } from '../utils';

export class DataStack extends Stack {
  public readonly spaceTable: ITable

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const suffix = getSuffixFromStack(this)

    this.spaceTable = new DynamoDbTable(this, 'SpaceTable', {
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING
      },
      tableName: `SpaceStack-${suffix}`
    })
  }
}