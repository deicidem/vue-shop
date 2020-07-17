<template >
  <transition 
    appear 
    enter-active-class="animate__animated animate__fadeIn" 
    leave-active-class="animate__animated animate__fadeOut" 
    mode="out-in">
      <form @submit.prevent="send" v-if="!formSubmited">
        <div class="progress">
          <div class="progress-bar" :style="progressWidth"></div>
        </div>
        <div>
          <app-input v-for="(item, index) in  info" :name="item.name" :value.sync="item.value" :pattern="item.pattern" :key="index" @changeStatus="changeStatus({index, status: $event})">
          </app-input>
        </div>
        <button class="btn btn-primary" :disabled="btnDisabled" >
         {{buttonText}}
        </button>
      </form>
      <div v-else> 
        <table class="table table-bordered">
          <tbody>
            <tr v-for="(item, index) in  info" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
        <div class="alert alert-success"> Hello, {{info[0].value}}!</div>
      </div>
      
    </transition>
</template>

<script>
import AppInput from './Input'

import {
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex';

export default {
  components: {
    AppInput,
  },
  methods: {
    ...mapMutations('form', {
      changeStatus: 'changeStatus'
    }),
    ...mapActions('form', {
      send: 'send'
    }),
  },
  computed: {
    ...mapGetters('form', {
      info: 'info',
      globalStatus: 'globalStatus'
    }),
    progressWidth() {
      return {
        width: (this.done / this.info.length * 100) + '%'
      }
    },
    btnDisabled(){
      return this.done < this.info.length || this.globalStatus !== null;
    },
    formSubmited() {
      return this.globalStatus == 'done';
    },
    done(){
        let done = 0;
        for (let i = 0; i < this.info.length; i++) {
          if (this.info[i].status) {
            done++;
          }
        }
        return done;
    },
    buttonText(){
      if (this.globalStatus == 'loading') {
        return 'Loading...'
      }
      return 'Send Data';
    }
  }
}
</script>