import * as _ from 'lodash'

const groupBy = (arr: any, key: any) => _.groupBy(arr, key)

const chartsData = (arr: any, type: any) => Object
  .keys(groupBy(arr, type))
  .reduce((acc: any, key: any) => {
    acc.push([key, groupBy(arr, type)[key].length])
    return acc
  }, [])

export {
  chartsData
}