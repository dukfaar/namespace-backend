export default `
type Mutation {
  createNamespace(name: String!): Namespace
  updateNamespace(_id: String!, name: String): Namespace
}
`