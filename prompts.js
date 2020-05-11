module.exports = [
  {
    type: 'list',
    name: 'preset',
    message: 'Select from one of the following presets to scaffold your Vue project:',
    choices: [
      {
        name: 'Base (A basic Vuetify application)',
        value: 'base'
      },
    ],
    default: 'base',
  }
]
