<script setup>
import { useNotesStore } from "@/stores/notesStore";
import { ref } from "vue";

const notesStore = useNotesStore();

const input = ref("");
const textarea = ref("");

const textValues = (val) => {
  if (val.className == "modal__content-input") {
    input.value = val.value;
  } else {
    textarea.value = val.value;
  }
};

const newTask = ref({
  title: input,
  body: textarea,
  createdAt: new Date(Date.now()).toLocaleDateString()
});
</script>

<template>
  <Transition name="modal">
    <div class="modal" @click="notesStore.toggleModal(false)">
      <div class="modal__content" @click.stop>
        <h3 class="modal__content-title">{{ notesStore.curID ? 'Edit' : 'Add' }} note</h3>
        <form
          action=""
          class="modal__content-form"
          @submit.prevent="
            notesStore.addTask(newTask, notesStore.curID),
            // notesStore.toggleModal(false)
            (input = ''),
            (textarea = '')
          "
        >
          <input
            type="text"
            @input="textValues($event.target)"
            class="modal__content-input"
            placeholder="Title"
            required
            :value="notesStore.title"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            class="modal__content-textarea"
            placeholder="Content"
            required
            :value="notesStore.body"
            @input="textValues($event.target)"
          ></textarea>
          <div class="modal__content-btns">
            <span
              class="modal__content-cancel"
              @click="notesStore.toggleModal(false)"
              >Cancel</span
            >
            <button class="modal__content-add">{{ notesStore.curID ? 'Edit' : 'Add' }}</button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>
