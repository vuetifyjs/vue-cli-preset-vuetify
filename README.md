# vue-cli-preset-vuetify
> A Vue CLI 3 Preset for generating scaffolded Vuetify applications

### 💿 Install

```bash
vue create my-project --preset vuetifyjs/vue-cli-preset-vuetify
```

### 🚀 Usage

#### Default Component Structure
Adds **base** and **core** components.

- **base**: Global components that are automatically loaded
- **core**: Application level components

#### Vuetify
- Configured default IE11/Safari/Edge support.
- Setup to use [vue-i18n](https://github.com/kazupon/vue-i18n)
- Setup to use [SASS Variables](https://vuetifyjs.com/customization/sass-variables)
- Setup to use [Material Design Icons SVG](https://github.com/Templarian/MaterialDesign-JS)

#### Plugins
- [vue-eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint)
  - [eslint-config-vuetify](https://github.com/vuetifyjs/eslint-config-vuetify)
- [vue-jest](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest)
- [vue-cypress](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress)
- [vue-router](https://github.com/vuejs/vue-router)
  - Language based routing `/en/about`
- [vuex](https://github.com/vuejs/vuex)
  - Preconfigured modules
  - [vuex-pathify](https://github.com/davestewart/vuex-pathify)
- [vue-cli-plugin-vuetify-cli](https://github.com/vuetifyjs/vue-cli-plugin-vuetify-cli)
- [vue-cli-plugin-vuetify-storybook](https://github.com/vuetifyjs/vue-cli-plugin-vuetify-storybook)
- [vuex-router-sync](https://github.com/vuejs/vuex-router-sync)
- [vue-meta](https://github.com/nuxt/vue-meta)
- [vue-analytics](https://github.com/MatteoGabriele/vue-analytics)
- [axios](https://github.com/axios/axios)
- [ZEIT Now](https://zeit.co/dashboard) deployment

### ⚡ Lighthouse
**94/100/100 Desktop**

**92/100/100 Mobile**

<hr>

#### @mdi/js Icons
With @mdi/js you must import the corresponding icon that you plan to use (custom).

```vue
<template>
  <v-icon>{{ mdiHeart }}</v-icon>
</template>

<script>
  import { mdiHeart } from '@mdi/js'

  export default {
    data: () => ({ mdiHeart })
  }
</script>
```
