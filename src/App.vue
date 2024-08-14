<script setup>
import Header from '@/layouts/header/Header.vue';
import NotesView from '@/views/notes/NotesView.vue';
import IconEdit from "@/components/icons/IconEdit.vue";
import Modal from "./components/UI/modal/Modal.vue";
import { useNotesStore } from "./stores/notesStore.js";

const notesStore = useNotesStore()

</script>

<template>
  <div class="wrapper">
    <Header/>
    <main>
      <NotesView/>
    </main>
    <span class="popup" @click="notesStore.toggleModal(true)">
      <IconEdit/>
    </span>
    <Teleport to="#body">
      <Modal v-show="notesStore.isShow"/>
    </Teleport>
  </div>
</template>