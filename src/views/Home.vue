<style>
#list {
  width: 43vw;
  height: 100%;
  background: #2D2C2C;
  margin-left: 13%;
  overflow-y: hidden;
}
#list:hover {
  overflow-y: auto;
}

#list b-table,
#list td,
#list tr,
#list th{
  color: rgb(200, 200, 200);
  border-color: #6e6e6e;
}

#list .table tr:nth-child(1) td{
  border:none;
}

#list .table td:nth-child(2){
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
#list .table input {
margin: 0;
height: 25px;
border-radius: 5px;
border:1px solid #979797
}
#list .table td:nth-child(1) {
flex-grow: 0;
}

#list .table td:nth-child(3) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

#list th{
  height: 0;
  border-bottom: none;
  border-top: none;
  padding: 0;
}
#list .list_title {
  font-family: 'Open Sans', sans-serif;
  color: #F5A623;
  font-size: 2rem;
  margin-bottom: 30px;
}
#list .form-control{
  border: 1.5px solid #F5A623;
  border-radius: 5rem;
  background-color: #2D2C2C;
  color: rgb(244,244,244);
}
#list .form-control:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 166, 0, 0.25);
}
#list b-icon{
  cursor: pointer;
}

</style>

<template lang="pug">
#list.p-5
  b-container
    b-row
      b-col(cols="12")
        h1.list_title TASK LIST
      b-col(cols="12")
        b-form-group(label-for="newinput" invalid-feedback="字數太少")
          b-form-input#newinput.w-75(placeholder="Add new task..." v-model="newinput" :state="newinputstate" @keydown.enter="additem")
      b-col.my-3(cols="12")
        b-table(:items="items" :fields="fields" show-empty striped hover)
          template(#empty)
            p Empty
          template(#cell(name)="data")
            b-form-input(
              v-if="data.item.edit"
              v-model="data.item.model"
              :state="data.item.state"
              @keydown.enter="submitedit(data.index)"
              @keydown.esc="canceledit(data.index)"
            )
            span(v-else) {{ data.value }}
          template(#cell(action)="data")
            span.d-flex.flex-row.justify-content-center.align-items-center(v-if="data.item.edit")
              .mx-1
                b-icon(icon="check" @click="submitedit(data.index)")
              .mx-1
                b-icon(icon="arrow-counterclockwise" @click="canceledit(data.index)")
            span.d-flex.flex-row.justify-content-center.align-items-center(v-else)
              .mx-1(variant="success")
                b-icon(icon="pencil" @click="edititem(data.index)")
              .mx-1(variant="danger")
                b-icon(icon="trash" @click="delitem(data.index)")
      b-col(cols="12")
        h1.list_title.mt-5 DONE
      b-col(cols="12")
        b-table-simple(striped hover)
          tbody
            tr(v-for="(item, idx) in finished")
              td {{ item }}
              td
                b-icon(icon="trash" @click="delfinish(idx)")
            tr(v-if="finished.length === 0")
              td(colspan="2") Empty
</template>

<script>
export default {
  data () {
    return {
      newinput: '',
      fields: [
        { key: 'check', label: '' },
        { key: 'name', label: '' },
        { key: 'action', label: '' }
      ]
    }
  },
  computed: {
    newinputstate () {
      return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    },
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model.length > 2
        return item
      })
    },
    finished () {
      return this.$store.state.finished
    }
  },
  methods: {
    additem () {
      if (this.newinput.length > 2) {
        this.$store.commit('additem', this.newinput)
        this.newinput = ''
      }
    },
    edititem (index) {
      this.$store.commit('edititem', index)
    },
    delitem (index) {
      this.$store.commit('delitem', index)
    },
    submitedit (index) {
      if (this.items[index].state) {
        this.$store.commit('submitedit', index)
      }
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
    },
    delfinish (index) {
      this.$store.commit('delfinish', index)
    }
  }
}
</script>
