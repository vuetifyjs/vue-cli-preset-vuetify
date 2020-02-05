module.exports = [
  {
    type: 'list',
    name: 'preset',
    message: 'The desired Vue CLI Preset',
    choices: [
      { name: 'Base', value: 'base' },
      // { name: 'Essential', value: 'essential' },
      // { name: 'Recommended', value: 'recommended' },
    ],
    default: 'base',
  }
]
