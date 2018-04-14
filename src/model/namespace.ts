import { Schema, model } from 'mongoose'

export const NamespaceSchema = new Schema({
  name: { type: String }
})

export const Namespace = model('namespace', NamespaceSchema) 