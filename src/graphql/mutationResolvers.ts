import * as _ from 'lodash'
import * as Promise from 'bluebird'

import createType from 'backend-utilities/mongooseCreateType'
import updateType from 'backend-utilities/mongooseUpdateType' 
  
import { Namespace } from '../model/namespace'
  
export default {
  createNamespace: (value, params) => createType(Namespace, {name: params.name}, params),
  updateNamespace: (value, params) => updateType(Namespace, {_id: params._id}, params)
}