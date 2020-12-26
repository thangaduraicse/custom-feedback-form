export default schema => values => {
  const result = schema.validate(values, { abortEarly: false });
  
  if (result.error === null) {
    return {};
  }

  return result.error.details.reduce((all, cur) => {
    const allErrors = Object.assign({}, all),
          path = cur.path[cur.path.length - 1],
          message = cur.message;
    
    Object.prototype.hasOwnProperty.call(allErrors, path)
      && (allErrors[path] += message)
      || (allErrors[path] = message);

    return allErrors;
  }, {});
};
