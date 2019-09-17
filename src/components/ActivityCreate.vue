<template>
  <div class="activity-form">
    <a
      v-if="!isFormDisplayed"
      class="button is-primary is-block is-alt is-large"
      href="#"
      @click="toggleFormDisplay"
    >New Activity</a>
    <div
      v-if="isFormDisplayed"
      class="create-form"
    >
    <h2>Create Activity</h2>
      <form>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              v-model="newActivity.title"
              class="input"
              type="text"
              placeholder="Read a Book"
            >
          </div>
        </div>
        <div class="field">
          <label class="label">Notes</label>
          <div class="control">
            <textarea
              v-model="newActivity.notes"
              class="textarea"
              placeholder="Write some notes here"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="control">
              <div class="select">
                <select v-model="newActivity.categories">
                  <option value="">Please Selet One</option>
                   <option v-for="category in categories" 
                      :value="category.id"
                      :key="category.id"
                      >{{ category.text }}</option>
                </select>
              </div>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              type="button"
              class="button is-link"
              :disabled="!isFormValid"
              @click="createActivity"
            >
              Create Activity
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button is-text"
              @click="toggleFormDisplay"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createNewActivityAPI } from '../api'
export default {
    props: {
      categories: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        isFormDisplayed: false,
        newActivity: {
        id: Math.random().toString(10).substring(8),
          title: '',
          notes: '',
          categories: ''
        }
      }
    },
    computed: {
      isFormValid () {
        return this.newActivity.title && this.newActivity.notes && this.newActivity.categories
      }
    },
    methods: {
      toggleFormDisplay () {
        this.isFormDisplayed = !this.isFormDisplayed
      },
      createActivity(){
        const activity = createNewActivityAPI(this.newActivity)
        this.$emit('activityCreated', {...activity});
      }
    }   
}

</script>

<style>

</style>