export default function onlyWhenTypeIs(type, propType) {
  const types = Array.isArray(type) ? type : [type]

  return (propValue, key, componentName, location, propFullName) => {
    const value = propValue[key]

    if (types.indexOf(propValue.type) !== -1) {
      return propType(propValue, key, componentName, location, propFullName)
    }
    if (value !== undefined && value !== null) {
      return new Error(
        `Prop '${key}' is invalid for '${componentName}' when type is
        not in [${types.join(', ')}].`
      )
    }
    return null
  }
}
