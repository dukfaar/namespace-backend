const genPaginationTypes = (typename: string) => `
type ${typename}Edge implements EdgeType {
  node: ${typename}
  cursor: String!
}

type ${typename}Connection implements ConnectionType {
  pageInfo: PageInfo!
  count: Int
  totalCount: Int
  edges: [${typename}Edge]
}
`

export default `
interface DbType {
  _id: ID!
}

interface ConnectionType {
  pageInfo: PageInfo!
  count: Int
  totalCount: Int
}

interface EdgeType {
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Item implements DbType {
  _id: ID!
  name: String

  namespace: Namespace
}

${genPaginationTypes('Item')}

type Namespace implements DbType {
  _id: ID!
  name: String

  items: [Item]
}

${genPaginationTypes('Namespace')}

type Viewer {
  items(after: String, first: Int, before: String, last: Int, name: String, namespace: ID): ItemConnection
}
`