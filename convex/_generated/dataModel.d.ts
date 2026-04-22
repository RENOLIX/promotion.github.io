export type Id<TableName extends string = string> = string & {
  readonly __tableName?: TableName;
};

export type Doc<TableName extends string = string> = {
  _id: Id<TableName>;
  _creationTime: number;
};
