const { renderRelativeToApp } = require('../utils');

module.exports = [
  {
    definedTask: 'default:ensureExists',
    prepare    : p => p.ensureExists = `${p.appRoot}/${p.ra.resources}/${p.pascalCased}/${p.pascalCased}List.js`
  },
  {
    definedTask: 'default:ensureNotExists',
    prepare    : p => p.ensureNotExists = `${p.appRoot}/${p.ra.resources}/${p.pascalCased}/${p.pascalCased}Edit.js`
  },
  {
    task    : 'generate',
    target  : `{{ra.resources}}/{{pascalCased}}/{{pascalCased}}Title.js`,
    template: 'resource/title.js'
  },
  {
    task    : 'generate',
    target  : `{{ra.resources}}/{{pascalCased}}/{{pascalCased}}Edit.js`,
    template: 'resource/edit.js'
  },
  {
    definedTask: 'ra:addResourceAttribute',
    prepare    : p => Object.assign(p, {
      addResourceAttribute: {
        resource : p.name,
        attribute: 'edit',
        value    : '{{pascalCased}}Edit'
      }
    })
  },
  {
    definedTask: 'ra:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: {
        name  : p.pascalCased + 'Edit',
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
        from  : `'./${p.pascalCased}Edit'`
      }
    })
  },
  {
    definedTask: 'ra:addTag',
    prepare    : p => Object.assign(p, {
      addTag: {
        target: `${p.ra.resources}/${p.pascalCased}/${p.pascalCased}List.js`,
        before: 'Datagrid',
        tag   : `<EditButton />`
      }
    })
  },
  {
    definedTask: 'ra:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: { name: 'EditButton', target: `${p.ra.resources}/${p.pascalCased}/${p.pascalCased}List.js` }
    })
  }
];
