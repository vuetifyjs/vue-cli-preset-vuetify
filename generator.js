// Utilities
const { exec } = require('child_process')

async function run (api, command) {
  let subprocess

  try {
    subprocess = exec(command, {
      cwd: api.resolve(''),
      env: {
        ...process.env,
        VUE_CLI_SKIP_DIRTY_GIT_PROMPT: true,
      }
    }, (err, stdout, stderr) => Promise.resolve({ stderr: err }))
  } catch (e) { /* */ }

  return subprocess
}

module.exports = (api, { preset = 'base' }) => {
  api.onCreateComplete(async () => {
    const presetName = `Vuetify ${preset} preset`
    const projectName = api.rootOptions.projectName
    const subprocess = await run(api, `vue add @vuetify/preset-${preset}`)

    if (!subprocess) {
      return console.error(`Unable to add preset ${preset}.`)
    }

    subprocess.stdout.on('close', async () => {
      console.log(`🍣  Successfully generated ${projectName} from the ${presetName}.\n`)
    })
  })
}
