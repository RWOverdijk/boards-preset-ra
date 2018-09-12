const { renderRelativeToApp } = require('../utils');

module.exports = [
  { definedTask: 'default:ensureNotExists', prepare: p => `${p.appRoot}/${p.ra.resources}/${p.pascalCased}/${p.pascalCased}List.js` },
  { task: 'generate', target: `{{ra.resources}}/{{pascalCased}}/{{pascalCased}}List.js`, template: 'resource/list.js' },
  { task: 'generate', target: `{{ra.resources}}/{{pascalCased}}/index.js`, template: 'resource/index.js' },
  {
    definedTask: 'ra:addImport',
    prepare    : p => Object.assign(p, {
      addImport: {
        importName: '{ {{pascalCased}}List }',
        from      : renderRelativeToApp(p, p.ra.resources, p.pascalCased),
        target    : p.ra.app
      }
    })
  },
  {
    definedTask: 'ra:addTag',
    prepare    : p => Object.assign(p, {
      addTag: {
        target: p.ra.app,
        before: 'Admin',
        tag   : `<Resource name="${p.name}" list={{{pascalCased}}List} />`
      }
    })
  },
];
