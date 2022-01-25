<style>
#sound {
  width: 43vw;
  height: 100%;
  background: #2D2C2C;
  color: white;
  margin-left: 13%;
}
#sound .table td {
  border-top:none;
  color: white;
}

#sound .table thead th {
  border-bottom:none;
  border-top:none;
  justify-content: center;
  text-align: center;
}

#sound .table tr {
  display: flex;
  justify-content: center;
  text-align: center;
}

#sound .table td {
  align-self: center;
}
.sound_title {
  font-family: 'Open Sans', sans-serif;
  color: #F5A623;
  font-size: 2rem;
}
#sound th {
  height: 0;
  padding: 0.5rem;
}
</style>

<template lang="pug">
#sound.p-5
  b-row
    b-col(cols='12')
      h1.sound_title.text-center SOUND
    b-col(cols='12')
      b-table(:items='items', :fields='fields', @row-clicked='select')
        template(#cell(src)='data')
          audio(controls='', :src="require('@/assets/'+data.value)")
        template(#cell(select)='data')
          b-icon(icon="check2" v-if='data.item.src === sound' style="color: #ff9d00;")
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'Ring', src: 'alarm.mp3' },
        { name: 'Yay', src: 'yay.mp3' }
      ],
      fields: [
        { key: 'name', label: '' },
        { key: 'src', label: '' },
        { key: 'select', label: '' }
      ]
    }
  },
  methods: {
    select (item) {
      this.$store.commit('selectSound', item.src)
    }
  },
  computed: {
    sound () {
      return this.$store.state.sound
    }
  }
}
</script>
