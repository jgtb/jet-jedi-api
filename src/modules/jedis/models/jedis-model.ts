import { statues } from '../../statues/helpers/enums'

export default {
  name: {
    type: String,
    required: true
  },
  planet: {
    type: String,
    required: true
  },
  master: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: statues,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
}
