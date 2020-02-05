module.exports = [
  {
    type: 'list',
    name: 'preset',
    message: 'The desired Vue CLI Preset',
    choices: [
      {
        name: 'Base (Basic scaffold)',
        value: 'base'
      },
      {
        disabled: true,
        name: 'Essential (Integrated CLI w/ unit testing)',
        value: 'essential'
      },
      {
        disabled: true,
        name: 'Recommended (Integrated Storybook)',
        value: 'recommended'
      },
    ],
    default: 'base',
  }
]
