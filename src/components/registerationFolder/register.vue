<template>
  <div>
    <app-logo></app-logo>
    <!-- <div style="display: block;">
      <p style="color: #fff; font-size: 20px">
        مرحبا بك يا {{newClientObj.name}} نتمنى لك قضاء وقت ممتع معنا <br>
        سيتم تحويلك تلقائيا في غضون ثوان
      </p>
      <button class="btn reg-btn submit-btn" @click="reRegister">
        التسجيل مجددا
      </button>
      <router-link class="btn reg-btn cancel-btn" to="home" tag="button">
        المتابعة الآن
      </router-link>
    </div> -->
    <div class="reg-form" v-if="newClient">
      <p>
        مرحبا بك في مطعمنا. <br> هل تريد التسجيل لدينا؟
      </p>
      <form action="" method="">
        <input 
          type="text" 
          name="clientName" 
          id="user-name" 
          placeholder="الاسم" 
          v-model="newClientObj.name" 
          required>
        <input 
          type="number" 
          name="clientPhone" 
          id="user-phone-number" 
          placeholder="رقم الهاتف" 
          v-model="newClientObj.phone" 
          minlength="11" 
          required>
        <button class="btn reg-btn submit-btn" @click="regesterClient">
          التسجيل
        </button>
      </form>
      <router-link class="btn reg-btn cancel-btn" to="home" tag="button">
        التخطي والمتابعة
      </router-link>
    </div>

    <div v-else>
      <p style="color: #fff; font-size: 20px">
        مرحبا بك مجددا يا {{oldClientName}} <br>
        سيتم تحويلك تلقائيا في غضون ثواني
      </p>
      <button class="btn reg-btn submit-btn" @click="reRegister">
        التسجيل مجددا
      </button>
      <router-link class="btn reg-btn cancel-btn" to="home" tag="button">
        المتابعة الآن
      </router-link>
    </div>
  </div>
</template>

<script>
import logo from '../logoContainerFolder/logoContainer'


export default {
  name: 'Registration',
  data(){
    return {
      delayedAction: '',
      newClient: false,
      doneReg: false,
      newClientObj: {
        name: '',
        phone: ''
      },
      oldClientName: localStorage.getItem('clientName')
    }
  },
  components: {
    'app-logo' : logo
  },
  beforeMount() {
    let regeisterCheck = localStorage.getItem('clientName');
    console.log(regeisterCheck)
    if (regeisterCheck == null) {
      this.newClient = true;
    } else {
      this.delayedAction = setTimeout(()=> this.$router.push({name :'الرئيسية'}), 5000);
    }
  },
  methods: {
    regesterClient() {
      event.preventDefault();
      localStorage.setItem('clientName', this.newClientObj.name);
      if (this.newClientObj.name != '' && this.newClientObj.phone != ''){
        this.$router.push({name :'الرئيسية'})
      }
    },
    reRegister(){
      localStorage.removeItem('clientName');
      this.newClient = true;
      clearTimeout(this.delayedAction)
    }
  }
}
</script>

<style scoped>
@import url('./registrationStyles.css');
</style>
