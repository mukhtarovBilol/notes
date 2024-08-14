<script setup>
import IconGrid from "@/components/icons/IconGrid.vue";
import IconList from "@/components/icons/IconList.vue";
import Card from "@/components/UI/card/Card.vue";
import { useNotesStore } from "@/stores/notesStore";
import { ref, computed } from "vue";

const notesStore = useNotesStore();

const icon = ref(false);

const toggleIcon = () => {
  icon.value = !icon.value;
};

const searchNotes = computed(() => {
    return notesStore.search ? notesStore.notes.filter(item => item.title.toLowerCase().includes(notesStore.search.toLowerCase())) : notesStore.notes
})

</script>

<template>
  <section class="notes">
    <div class="container">
      <div class="notes__top">
        <h2 class="notes__title">
          {{ notesStore.notes.length ? "All notes" : "No notes" }}
        </h2>
        <span class="notes__top-checker" @click="toggleIcon">
          <IconGrid v-if="icon" />
          <IconList v-else />
          <b>{{ icon ? "Grid" : "List" }}</b>
        </span>
      </div>
      <div class="notes__cards" :class="{ grid: icon }">
        <Card v-for="item in searchNotes" :key="item.id" :info="item" />
      </div>
    </div>
  </section>
</template>
