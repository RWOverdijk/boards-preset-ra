const { renderRelativeToApp } = require('../utils');

module.exports = [
  {
    definedTask: 'default:ensureExists',
    prepare    : p => p.ensureExists = `${p.appRoot}/${p.ra.resources}/${p.pascalCased}/${p.pascalCased}List.js`
  },
  {
    definedTask: 'default:ensureNotExists',
    prepare    : p => p.ensureNotExists = `${p.appRoot}/${p.ra.resources}/${p.pascalCased}/${p.pascalCased}Create.js`
  },
  {
    task    : 'generate',
    target  : `{{ra.resources}}/{{pascalCased}}/{{pascalCased}}Create.js`,
    template: 'resource/create.js'
  },
  {
    definedTask: 'ra:addResourceAttribute',
    prepare    : p => Object.assign(p, {
      addResourceAttribute: {
        resource : p.name,
        attribute: 'create',
        value    : '{{pascalCased}}Create'
      }
    })
  },
  {
    definedTask: 'ra:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: {
        name  : p.pascalCased + 'Create',
        module: renderRelativeToApp(p, p.ra.resources, p.pascalCased),
        target: p.ra.app
      }
    })
  },
  {
    definedTask: 'ra:addExport',
    prepare    : p => Object.assign(p, {
      addExport: {
        target: '{{ra.resources}}/{{pascalCased}}/index.js',
        from  : `'./${p.pascalCased}Create'`
      }
    })
  },
  {
    definedTask: 'ra:addTag',
    prepare    : p => Object.assign(p, {
      addTag: {
        target: `${p.ra.resources}/${p.pascalCased}/${p.pascalCased}List.js`,
        before: 'Datagrid',
        tag   : `<CreateButton />`
      }
    })
  },
  {
    definedTask: 'ra:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: { name: 'CreateButton', target: `${p.ra.resources}/${p.pascalCased}/${p.pascalCased}List.js` }
    })
  }
];
