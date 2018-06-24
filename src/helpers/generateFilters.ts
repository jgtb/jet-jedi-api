import * as _ from 'lodash'

const generateFilters = (filters: any) => _.pickBy(_.omit(filters, 'page', 'limit'), _.identity)

export default generateFilters