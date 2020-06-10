export const mergeDefinedProperties = (sourceObj, targetObj) => {
  const filteredSource = Object.keys(sourceObj).reduce((acc, current) => {
    return sourceObj[current] === undefined ?
      acc :
      {
        ...acc,
        [current]: sourceObj[current]
      }
  }, {});
  return {
    ...targetObj,
    ...filteredSource
  };
}