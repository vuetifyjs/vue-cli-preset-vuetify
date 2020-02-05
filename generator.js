module.exports = (api, opts) => {
  api.onCreateComplete(() => {
    const { exec } = require('child_process')

    return exec(`VUE_CLI_SKIP_DIRTY_GIT_PROMPT=true vue add @vuetify/vue-cli-plugin-preset-${opts.preset}`, {
      cwd: api.resolve(),
    },(err, std, stderr) => err && console.log(err))
  })
}
