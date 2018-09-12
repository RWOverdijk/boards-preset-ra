const path = require('path');

module.exports.renderRelativeToApp = (p, target, file) => {
  let relativePath = path.relative(
    path.parse(path.resolve(p.appRoot, p.ra.app)).dir,
    path.resolve(p.appRoot, target)
  );

  if (relativePath[0] !== '.') {
    return './' +  path.join(relativePath.replace(/^\//, ''), file);
  }

  return path.join(relativePath, file);
};
