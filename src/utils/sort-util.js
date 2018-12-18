export default {
  // 按照某个属性的值设置序号
  setOrder (datas, attr) {
    if (!datas && datas.length < 1) {
      return datas
    }
    for (let i = 0; i < datas.length; i++) {
      if (i === 0) {
        datas[i].order = 1
      } else if (datas[i][attr] === datas[i - 1][attr]) {
        datas[i].order = datas[i - 1].order
      } else {
        datas[i].order = i + 1
      }
    }
    return datas
  },
  /**
   * 按照某个属性对数据进行排序
   */
  ascData (datas, attr) {
    datas.sort(function (a, b) {
      if (a[attr] === null) {
        return 1
      } else if (b[attr] === null) {
        return -1
      } else {
        return a[attr] - b[attr]
      }
    })
    return datas
  },
  ascDataDate (datas, attr) {
    datas.sort(function (a, b) {
      if (a[attr] === null) {
        return 1
      } else if (b[attr] === null) {
        return -1
      } else {
        return Date.parse(a[attr]) - Date.parse(b[attr])
      }
    })
    return datas
  },
  /**
   * 按照某个属性对数据进行降序排列
   * @param datas
   * @param attr
   */
  descData (datas, attr) {
    datas.sort(function (a, b) {
      return b[attr] - a[attr]
    })
    return datas
  },
  setFirst (datas, attr, val) {
    let first = []
    for (let i = 0; i < datas.length; i++) {
      if (datas[i][attr] === val) {
        first = first.concat(datas.splice(i, 1))
        i--
      }
    }
    for (let i in first) {
      datas.unshift(first[i])
    }
    return datas
  }
}
