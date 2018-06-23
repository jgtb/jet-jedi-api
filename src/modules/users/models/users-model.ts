export default {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    index: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
}
