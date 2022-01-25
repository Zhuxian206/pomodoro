<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
#app {
  position: relative;
  height: 100vh;
  width: 100vw;
}
#app .left_link{
  height: 100vh;
  width: 13vw;
  min-width: 100px;
  position: fixed;
  display: flex;
  background: #434343;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
}
#app .btn_link{
  display: block;
  width: 68px;
  height: 68px;
  border: 2px solid #F5A623;
  border-radius: 50%;
  color: #F5A623;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
/* .btn_link:hover {
  background: #F5A623;
  filter: invert(23%) sepia(13%) saturate(12%) hue-rotate(352deg) brightness(98%) contrast(88%);
} */
#app router-view{
  position: absolute;
  left:13%;
  width: 43vw;
}

#app .show_time {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 44vw;
  background: #434343;
  color: #F5A623;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app .t_pomodoro {
  transform: rotate(270deg);
  position: absolute;
  bottom: 20%;
  color: #F5A623;
}

.nowtime {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 2.5rem;
}

.b-cir {
  width: 400px;
  height: 400px;
  border: 2px solid #F5A623;
  border-radius: 50%;
  margin: 30px 0;
}
.s-cir {
  width: 85%;
  height: 85%;
  border: 2px solid #F5A623;
  border-radius: 50%;
}
.b-cir h2{
  font-size: 4.5rem;
  letter-spacing: 4px;
  color: white;
}
.btn_or {
  height: 2.5rem;
  width: 9rem;
  background: #F5A623;
  border-radius: 9rem;
  color: #434343;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  margin: 5px;
}
.xs_cir {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 2rem;
  width: 50%;
}

.xs_cir span {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  margin: 20px 12px;
  border: 1px solid #F5A623;
  background: #434343;
}
</style>
<template>
  <div id="app">
    <div class="left_link">

      <router-link type="button" class="btn_list btn_link btn btn-outline-warning" to="/">
        <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H21.5" stroke="#F5A623" stroke-width="1.5"/>
          <path d="M0 6H17" stroke="#F5A623" stroke-width="1.5"/>
          <path d="M0 11H21.5" stroke="#F5A623" stroke-width="1.5"/>
          <path d="M0 16H17" stroke="#F5A623" stroke-width="1.5"/>
        </svg>
      </router-link>

      <router-link type="button" class="btn_link btn btn-outline-warning" to="/analyze">
        <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 16.5L10 7L17 13L29 1" stroke="#F5A623" stroke-width="1.5"/>
          <path d="M21.5 1H29V8.5" stroke="#F5A623" stroke-width="1.5"/>
        </svg>
      </router-link>

      <router-link type="button" class="btn_link btn btn-outline-warning" to="/sound">
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 22H10C9.99998 23 10.9604 24.5 13 24.5C15.0396 24.5 16 23 16 22Z" fill="#F5A623"/>
          <path d="M24 19C23.3043 18.8182 21.287 18.6727 20.8696 17.3636C20.3478 15.7273 21.3088 7.06682 19.3043 4.27273C17.7391 2.09091 15.6522 1 12 1" stroke="#F5A623" stroke-width="1.5"/>
          <path d="M1 19C1.69565 18.8182 3.71304 18.6727 4.13043 17.3636C4.65217 15.7273 3.6912 7.06682 5.69565 4.27273C7.26087 2.09091 9.34783 1 13 1" stroke="#F5A623" stroke-width="1.5"/>
          <path d="M0 19H25.5" stroke="#F5A623" stroke-width="1.5"/>
        </svg>
      </router-link>

      <h1 class="t_pomodoro">POMODORO</h1>
    </div>
    <router-view></router-view>
    <div class="show_time">
      <b-container class="d-flex flex-column justify-content-center align-items-center">
        <h3 class="nowtime d-flex flex-row justify-content-center align-items-center">
          <img class="mx-3" src="../public/img/icons/favicon-32x32.png">
          {{ nowtime }}</h3>
        <!-- <h1>{{ currentText }}</h1> -->
        <div class="b-cir d-flex justify-content-center align-items-center">
          <div class="s-cir d-flex justify-content-center align-items-center">
            <h2>{{ timeText }}</h2>
          </div>
        </div>
        <b-btn class="mx-1 btn_or" v-if="status !== 1" @click="start">
          Start</b-btn>
        <b-btn class="mx-1 btn_or" v-else @click="pause">Pause</b-btn>
        <b-btn class="mx-1 btn_or" v-if="current.length > 0" @click="finish(true)">
          Next
        </b-btn>
        <div class="xs_cir">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 倒數中
      // 2 = 暫停
      status: 0,
      timer: 0
    }
  },
  computed: {
    current () {
      return this.$store.state.current
    },
    items () {
      return this.$store.state.items
    },
    // currentText () {
    //   return this.current.length > 0 ? this.current : this.items.length > 0 ? '點擊開始' : '沒有事項'
    // },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m} : ${s}`
    },
    nowtime () {
      return String('PM 1:00')
    }
  },
  methods: {
    start () {
      if (this.status === 0 && this.items.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    pause () {
      this.status = 2
      clearInterval(this.timer)
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = require('@/assets/' + this.$store.state.sound)
        audio.play()
      }

      if (this.items.length > 0) {
        this.start()
      }
    }
  }
}
</script>
