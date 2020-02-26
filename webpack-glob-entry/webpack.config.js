const path = require('path');
const glob = require('glob');

const targetGlob = path.join('src', '*', 'index.js');
const targetDirs = glob.sync(targetGlob);

const entry = targetDirs.reduce((prev, curr) => {
  const dir = path.dirname(curr);
  const name = path.basename(dir);
  return {
    ...prev,
    [name]: path.resolve(curr)
  }
}, Object.create(null));


module.exports = {
  mode: 'development',
  entry,
  output: {
    filename: '[name]/index.js',
    path: path.resolve('dist')
  },
};

