<template>
  <q-page class="flex flex-center" padding>
    <div class="q-pa-lg flex flex-center col-md-12">
      <div class="text-h4">
        Current Page: {{ getCatData.current_page }} / {{ getCatData.last_page }}
      </div>
      <div class="row q-pa-lg q-my-lg">
        <div v-for="(catFact, index) in getCatData.data" :key="index" class="col-12 col-sm-6 col-md-4 q-pa-md">
          <q-card
            class="bg-secondary text-white"
          >
          <q-card-section>
            <div class="text-h6">
              Length: {{ catFact.length }}
            </div>
          </q-card-section>
          <q-separator dark />
          <q-card-section>
            <div class="text-subtitle2">
              {{ catFact.fact }}
            </div>
          </q-card-section>
          </q-card>
        </div>
      </div>
      <q-select
      class="q-pa-md"
        v-model="perPageModel"
        :options="perPageOptions"
        @update:model-value="getCatFactData(getCatData.current_page, perPageModel)"
        borderless
        outlined
      >
      </q-select>
      <q-pagination
        color="purple"
        v-model="getCatData.current_page"
        :max="getCatData.last_page"
        :max-pages="6"
        boundary-numbers
        boundary-links
        direction-links
        @update:model-value="getCatFactData(getCatData.current_page, perPageModel)"
      ></q-pagination>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ViewIndex',
  setup () {
    let store = useStore()
    const perPageOptions = computed(() => store.getters.pageOptions)
    let perPageModel = ref(perPageOptions.value[0])
    const getCatData = computed(() => store.getters.catData)
    const firstPage = ref(1)
    
    onMounted (() => {
      getCatFactData(firstPage.value, perPageModel.value)
    })

    function getCatFactData(page, limit) {
      store.dispatch('getCatFacts', {page, limit})
    }
    
    return {
      getCatData,
      perPageModel,
      perPageOptions,
      getCatFactData
    }
  },


}

</script>
