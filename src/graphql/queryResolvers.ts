import { Namespace } from '../model/namespace'

import getProjection from 'backend-utilities/getProjection'

export default {
  namespaces: (root, params, source, options) => Namespace.find().select(getProjection(options)).lean().exec(),
  namespace: (root, params, source, options) => Namespace.findOne({_id: params.id}).select(getProjection(options)).lean().exec()
}