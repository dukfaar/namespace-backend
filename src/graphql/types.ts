export default `
interface DbType {
  _id: ID!
}

type Namespace implements DbType {
  _id: ID!
  name: String
}
`