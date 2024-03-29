<template>
  <div id="vueGoalApp">
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <h1>{{ fullAppName }}</h1>
        </div>
      </div>
    </nav>
    <TheNavbar />
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <ActivityCreate 
            :categories=categories 
            @activityCreated="createActivity" 
          />
        </div>
        <div class="column is-9">
          <div class="box content" 
            :class="{fetching: isFetching, 'has-error': error}">
            <div v-if="error">
              {{error}}
            </div>
            <div v-else>
                <div v-if="isFetching">
                  Loading...
                </div>
                <ActivityItem
                  v-for="activity in activities"
                  :key="activity.id"
                  :activity="activity"
                  :categories="categories"
                />
            </div>
            <div v-if="!isFetching">
              <div class="activity-length">Currently have {{ activityCount }} activities</div>
              <div class="activity-motivation">Activity motivation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import ActivityItem from './components/ActivityItem'
import ActivityCreate from './components/ActivityCreate'
import TheNavbar from './components/TheNavbar'
import { ActivitiesAPI, UserAPI, CategoriesAPI } from './api'
export default {
  components: {
    ActivityItem, ActivityCreate, TheNavbar
  },
  data() {
    return {
      creator: 'Pjay Nadela',
      appName: 'Activity Planner', 
      siFetching: false,
      error: null,
      user: {
        name: 'Pjay Nadela',
        id: '-Aj34jknvncx98812',
      },
      activities: {},
      categories: {}
    }
  },
  computed: {
    fullAppName(){
      return `${this.appName} by ${this.creator}`
    },
    activityCount(){
      return Object.keys(this.activities).length
    }
  },  
  created() {
    this.isFetching = true
    ActivitiesAPI().then(activitiesList => {
      this.activities = activitiesList
      this.isFetching = false
    })
    .catch(err=> {
      this.err = err
      this.isFetching = false
    })    
    this.user = UserAPI()
    this.categories = CategoriesAPI()
  },
  methods: {
    createActivity(newActivity) {
      console.log(newActivity)      
      Vue.set(this.activities, newActivity.id, newActivity)
    }
  }  
}
</script>

<style>
#vueGoalApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body {
  font-family: 'Open Sans', serif;
  background: #F2F6FA;
}
footer {
  background-color: #F2F6FA !important;
}
.example-wrapper {
  margin-left: 30px;
}
.topNav {
  border-top: 5px solid #3498DB;
}
.topNav .container {
  border-bottom: 1px solid #E6EAEE;
}
.container .columns {
  margin: 3rem 0;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8F99A3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E6EAEE;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.activity-length {
  display: inline-block;
}
.activity-motivation {
  float: right;
}

.menu-list li{
  padding: 5px;
}

.navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}
.fetching {
  border: 2px solid orange;
}
.has-error {
  border: 2px solid red;
}
</style>
