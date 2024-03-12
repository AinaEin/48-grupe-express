let requestCount = 0;

function helpMe(req, res, next) {
  requestCount++;
  consol.log(requestCount, req.url);

  next();
}

export { helpMe };