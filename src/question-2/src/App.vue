<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <ViewIndex />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import ViewIndex from './components/ViewIndex.vue'

export default {
  name: 'LayoutDefault',

  components: {
    ViewIndex
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
