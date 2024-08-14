<script setup>
import IconEdit from "@/components/icons/IconEdit.vue";
import IconDelete from "@/components/icons/IconDelete.vue";
import { useNotesStore } from "@/stores/notesStore";

const props = defineProps({
    info: {
        type: Object,
        required: true,
    }
})

const notesStore = useNotesStore()

</script>

<template>
    <div class="card">
        <h3 class="card__title">{{ info?.title }}</h3>
        <span class="card__date">
            {{ info?.createdAt }} 
            {{ notesStore.isEdited == info?.createdAt ? "(edited)" : "" }}</span>
        <p class="card__txt">{{ info?.body }}</p>
        <div class="card__controls">
            <span class="card__edit" @click="notesStore.toggleModal(true), notesStore.editTask(info?.id)">
                <IconEdit/>
                Edit
            </span>
            <span class="card__del" @click="notesStore.delTask(info?.id)">
                <IconDelete/>
                Delete
            </span>
        </div>
    </div>
</template>
