<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})

const codeCopied = ref<boolean>(false);

const copyCode = (): void => {
  navigator.clipboard.writeText(props.code)
      .then(() => {
        codeCopied.value = true;
        setTimeout(function () {
          codeCopied.value = false;
        }, 5000);
      })
      .catch((e) => {
        console.error('Error: Unable to copy code.');
      });
}
</script>

<template>
  <div class="pre">
    <div class="pre-head">
      <div v-if="props.filename" class="filename">
        <i>{{ filename }}</i>
      </div>
      <span v-if="codeCopied" class="copy-success"><i>Copied</i></span>
      <button class="copy-btn" @click="copyCode">Copy</button>
    </div>
    <pre class="pre-body" :class="$props.class"><slot/></pre>
  </div>
</template>

<style lang="scss">
.pre {
  overflow-x: hidden;
  border-radius: 6px;
  margin-bottom: 3rem;
  background-color: var(--shiki-default-bg);
  border: 1px solid var(--shiki-default);

  &-head {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: .5rem .5rem .5rem .75rem;

    .filename,
    .copy-success,
    .copy-btn {
      font-family: Arial, "sans-serif";
      font-size: .8rem;
      color: var(--shiki-default);
      opacity: 0.5;
    }

    .filename {
      margin-left: 0;
      margin-right: auto;
    }

    .copy-success,
    .copy-btn {
      padding: 0.25em 0.75em;
      border: 1px solid transparent;
      border-radius: 4px;
    }

    .copy-success {
      color: lightgreen;
      border-color: transparent;
    }

    .copy-btn {
      background-color: inherit;
      border-color: var(--shiki-default);

      &:hover,
      &:active {
        color: lightgreen;
        border-color: lightgreen;
      }
    }
  }

  &-body {
    margin: 0;
    padding: .75rem 0 .75rem 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    overflow-x: auto;

    code {
      display: inline-block;
      width: 100%;
    }

    .line {
      padding: 0 .75rem;
      line-height: 1.6;

      span {
        background-color: transparent !important;
      }

      &.highlight,
      &.highlighted {
        background-color: color-mix(in srgb, var(--shiki-default-bg) 70%, #888888);
      }

      &::before {
        content: attr(line);
        padding-right: 1.25rem;
        display: inline-block;
        opacity: 0.8;
      }

      &.diff.remove {
        background-color: color-mix(in srgb, var(--shiki-default-bg) 65%, #F43F5E);
      }

      &.diff.add {
        background-color: color-mix(in srgb, var(--shiki-default-bg) 75%, #10B981);
      }
    }
  }
}

pre code .line {
  display: block;
}
</style>