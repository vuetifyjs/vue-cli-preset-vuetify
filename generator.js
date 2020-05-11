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
    }, stderr => Promise.resolve({ stderr }))
  } catch (e) { /* */ }

  return subprocess
}

module.exports = (api, { preset = 'base' }) => {
  api.onCreateComplete(async () => {
    const presetName = `Vuetify ${preset} preset`
    const projectName = api.rootOptions.projectName
    let subprocess

    try {
      subprocess = await run(api, `vue add @vuetify/preset-${preset}`)
    } catch (err) {
      console.warn(err)
    }

    if (!subprocess) {
      return console.error(`Unable to add preset ${preset}.`)
    }

    subprocess.stdout.on('close', async () => {
      console.log(`🍣  Successfully generated ${projectName} from the ${presetName}.\n`)
    })
  })
}
