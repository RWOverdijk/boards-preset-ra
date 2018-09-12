module.exports = [
  // Notify user
  { task: () => console.log('Creating new react-admin project. This might take a while!') },

  // Make sure create-react-app exists
  { definedTask: 'default:checkBinary', prepare: { checkBinary: 'create-react-app' } },

  // Make sure the dir we're trying to make doesn't exist yet
  { definedTask: 'default:ensureNotExists', prepare: p => p.ensureNotExists = p.name },

  // Create a new react app
  { definedTask: 'default:exec', prepare: p => { p.exec = `create-react-app ${p.name}`} },

  // Navigate into the new directory
  { definedTask: 'default:cd', prepare: p => p.cd = p.name },

  // Re-prepare to set the proper package manager
  { definedTask: 'default:prepare' },

  // Add react-admin
  { definedTask: 'default:addDep', prepare: p => { p.addDep = { dependency: 'react-admin' } } },

  // Add data json server
  { definedTask: 'default:addDep', prepare: p => { p.addDep = { dependency: 'ra-data-json-server' } } },

  // Add local dev preset (ra)
  { definedTask: 'default:addDep', prepare: p => { p.addDep = { dependency: 'boards-preset-ra', dev: true } } },

  // Create the skeleton files
  { task: 'generate', from: 'skeleton', glob: '**/*', target: './' }
];
