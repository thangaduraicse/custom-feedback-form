export default schema => values => {
  const errors = {},
        result = schema.validate(values, { abortEarly: false });
  
  if (result.error !== null) {
    result.error.details.map(cur => {
      const path = cur.path[cur.path.length - 1],
            message = cur.message;
  
      errors[path]
        && (errors[path] += message)
        || (errors[path] = message);
    });
  }

  return errors;
};
