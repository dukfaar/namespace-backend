export default `
type Query {
  namespaces: [Namespace]

  namespace(id: ID!): Namespace

  viewer: Viewer
}
`