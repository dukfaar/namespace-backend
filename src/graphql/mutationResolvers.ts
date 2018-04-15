import * as _ from 'lodash'
import * as Promise from 'bluebird'

import {
  mongooseCreateType as createType,
  mongooseUpdateType as updateType 
} from 'backend-utilities'
  
import { Namespace } from '../model/namespace'
  
export default {
  createNamespace: (value, params) => createType(Namespace, {name: params.name}, params),
  updateNamespace: (value, params) => updateType(Namespace, {_id: params._id}, params)
}