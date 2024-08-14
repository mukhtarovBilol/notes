import { defineStore } from 'pinia'
import PiniaPersist from 'pinia-plugin-persist'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    isShow: false,
    title: "",
    body: "",
    search: "",
    curID: null,
    isEdited: null,
    notes: [{
      id: 1,
      title: "Task 1",
      body: "Content",
      createdAt: "10.12.2023"
    }]
  }),
  actions: {
    toggleModal(bool) {
      this.isShow = bool
      this.curID = null
      this.title = ""
      this.body = ""
    },
    addTask(note, id) {
      this.title = note.title || this.title
      this.body = note.body || this.body

      const newTask = {
        id: id || new Date().getTime(),
        title: this.title,
        body: this.body,
        createdAt: new Date(Date.now()).toLocaleDateString()
      }

      if (id) {
        const noteID = this.notes.findIndex(item => item.id === id)
        this.notes.splice(noteID, 1, newTask)
        this.isEdited = note.createdAt
      } else {
        this.notes.push(newTask)
        this.title = ""
        this.body = ""
      }
      this.toggleModal(false)
    },
    delTask(id) {
      this.notes = this.notes.filter(item => item.id !== id)
    },
    searchValue(str) {
      this.search = str
    },
    editTask(id) {
      const editNote = this.notes.find(item => item.id == id)
      this.title = editNote.title
      this.body = editNote.body
      this.curID = id
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'notes',
        storage: localStorage
      }
    ]
  }
})