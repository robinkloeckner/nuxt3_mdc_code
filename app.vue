<script setup>
const md = `
\`\`\` javascript  [index.js] {1} additional meta data
import {parseMarkdown} from '@nuxtjs/mdc/runtime'

// Welcome to docs4.dev blog - This is a very long comment to demonstrate the scrollbar -------------------------------------------------------
async function main(mdc: string) {
  const ast = await parseMarkdown(mdc) // [!code highlight]

  console.log('Welcome docs4.dev') // [!code --]
  console.log('Welcome to docs4.dev'); // [!code ++]

  return ast
}
\`\`\`
`
</script>

<template>
  <div>
    <MDC :value="md" />
  </div>
</template>