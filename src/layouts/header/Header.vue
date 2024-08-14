<script setup>
import { useNotesStore } from '@/stores/notesStore';

const notesStore = useNotesStore()

</script>

<template>
    <header class="header">
        <div class="container">
            <h1 class="header__title">Notes</h1>
            <form action="" class="header__form">
                <input type="text" placeholder="Search..." required class="header__form-input" @input="notesStore.searchValue($event.target.value) ">
            </form>
        </div>
    </header>
</template>
