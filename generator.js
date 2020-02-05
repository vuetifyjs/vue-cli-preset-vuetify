module.exports = (api, opts) => {
  api.onCreateComplete(() => {
    const { exec } = require('child_process')

    return exec(`vue add @vuetify/vue-cli-plugin-preset-${opts.preset}`, {
      cwd: api.resolve(),
      env: {
        ...process.env,
        VUE_CLI_SKIP_DIRTY_GIT_PROMPT: true,
      },
    }, err => err && console.log(err))
  })
}
