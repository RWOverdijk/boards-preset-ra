module.exports = [
  {
    definedTask: 'ra:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: {
        name  : 'Delete',
        target: p.ra.app
      }
    })
  },
  {
    definedTask: 'ra:addResourceAttribute',
    prepare    : p => Object.assign(p, {
      addResourceAttribute: {
        resource : p.name,
        attribute: 'remove',
        value    : 'Delete'
      }
    })
  },
];
