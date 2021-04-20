const status = (res, status, message, extras = []) => {
  res.status(200).send({ status, message, extras });
  res.end();
};

const success = (res, message, extras) => {
  return status(res, true, message, extras);
};

const error = (res, message, extras) => {
  return status(res, false, message, extras);
};

module.exports = { status, success, error };
