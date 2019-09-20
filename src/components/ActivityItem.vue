<template>
  <article class="post">
    <h4>{{ activity.title }}</h4>
    <h4>{{ categories[activity.category].text }}</h4>
    <h4>{{ activity.notes }}</h4>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Pjay Nadela</a> updated {{ activity.updatedAt }} minutes ago &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>Progress: <span :class="activityProgress">{{ activity.progress }} %</span></span>
      </div>
    </div>
  </article>
</template>

<script>

	export default {
    props: {
      activity: {
        type: Object,
        required: true
      },
      categories: {
        type: Object,
        required: true
      }
    },
    computed: {
      activityProgress(){
        const progress = this.activity.progress
        if(progress<=0){
          return 'color-red'
        }
        else if(progress<=50){
          return 'color-orange'
        }
        else {
          return 'color-green'
        }
      }
    }
	}
</script>

<style scoped>
	.color-red {
    color: red
  }
  .color-orange {
    color: orange;
  }
  .color-green {
    color: green;
  }
</style>