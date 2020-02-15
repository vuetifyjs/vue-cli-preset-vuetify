// Utilities
const chalk = require('chalk')
const { exec } = require('child_process')
const { upperFirst } = require('lodash')
const {
  log,
  logWithSpinner,
  stopSpinner,
} = require("@vue/cli-shared-utils")

async function run (api, command) {
  let subprocess

  try {
    subprocess = exec(command, {
      cwd: api.resolve(),
      env: {
        ...process.env,
        VUE_CLI_SKIP_DIRTY_GIT_PROMPT: true,
      }
    }, (err, stdout, stderr) => Promise.resolve({ stderr: err }))
  } catch (e) { /* */ }

  return subprocess
}

module.exports = (api, { preset = 'base' }) => {
  // TODO: This should be in the base plugin.
  // Ran into issue with duplicate extends
  // and temporarily moved it into here
  api.extendPackage({
    'eslintConfig': { 'extends': 'vuetify' },
  })

  api.onCreateComplete(async () => {
    const presetName = chalk.blue(`Vuetify ${upperFirst(preset)} Preset`)
    const projectName = chalk.yellow(api.rootOptions.projectName)

    logWithSpinner(`🦈`, `Preparing CLI Preset. This may take a while...`)

    const {
      stderr,
      stdout
    } = await run(api, `vue add @vuetify/preset-${preset}`)

    if (!stdout) {
      return console.error(`Unable to add preset ${preset} due to error: ${stderr}`)
    }

    stdout.on('close', async () => {
      stopSpinner()

      await run(api, './node_modules/.bin/vue-cli-service run lint')

      log(`🍣  Successfully generated ${projectName} from the ${presetName}.`)
      log()
    })
  })
}
