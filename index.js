module.exports = {
  templateRoot: __dirname + '/templates',
  tasks       : require('./lib/task/index'),
  parameters  : {
    ra: {
      resources: './resource/',
      app      : 'App.js'
    }
  }
};
