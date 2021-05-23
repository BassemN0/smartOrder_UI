<template>
  <div>
    <app-logo></app-logo>
    <div>
      <transition name="fade" mode="out-in">
        <div class="reg-form" v-if="newClient" key="1">
          <p style="margin-bottom: 10px">
            مرحبا بك في مطعمنا. <br />
            هل تريد التسجيل لدينا؟
          </p>
          <div
            style="opacity: 0; transition: all 0.5s linear"
            class="btn-danger"
            id="req"
          >
            <transition name="fade" mode="out-in">
              <p :key="this.errMsg">
                {{ this.errMsg }}
              </p>
            </transition>
          </div>
          <form>
            <input
              type="text"
              name="clientName"
              id="user-name"
              placeholder="الاسم"
              v-model="newClientObj.name"
              required
            />
            <input
              type="number"
              name="clientPhone"
              id="user-phone-number"
              placeholder="رقم الهاتف"
              v-model="newClientObj.phone"
              minlength="11"
              required
            />
            <button class="btn reg-btn submit-btn" @click="regesterClient">
              التسجيل <span class="loading-3"></span>
            </button>
          </form>
          <router-link class="btn reg-btn cancel-btn" to="home" tag="button">
            التخطي والمتابعة
          </router-link>
        </div>

        <div v-else key="2">
          <p style="color: #fff; font-size: 20px">
            مرحبا بك مجددا يا {{ oldClientName }} <br />
            سيتم تحويلك تلقائيا في غضون ثواني
          </p>
          <button class="btn reg-btn submit-btn" @click="reRegister">
            التسجيل مجددا
          </button>
          <button class="btn reg-btn cancel-btn" @click="toHome">
            المتابعة الآن
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "@/axios-global";
import logo from "./logoContainer";

export default {
  name: "Registration",
  data() {
    return {
      regex: /^[0-9]+$/,
      errMsg: "لا يمكنك ان تترك حقل فارغ",
      delayedAction: "",
      newClient: false,
      doneReg: false,
      newClientObj: {
        name: null,
        phone: null,
      },
      oldClientName: localStorage.getItem("clientName"),
    };
  },
  components: {
    "app-logo": logo,
  },
  beforeMount() {
    let regeisterCheck = localStorage.getItem("clientName");
    if (regeisterCheck == null) {
      this.newClient = true;
    } else {
      this.delayedAction = setTimeout(
        () => this.$router.push({ name: "الرئيسية" }),
        5000
      );
    }
  },
  methods: {
    regesterClient() {
      event.preventDefault();
      if (
        this.newClientObj.name != "" &&
        this.newClientObj.phone != null &&
        this.newClientObj.name != null
      ) {
        if (
          this.newClientObj.phone.match(this.regex) &&
          this.newClientObj.phone.length == 11
        ) {
          document.querySelector(".loading-3").style.width = 24 + "px";
          axios
            .post("api/client/addClient", this.newClientObj)
            .then((res) => {
              console.log(res);
              if (res.data.statusCode == 200) {
                localStorage.setItem("clientName", this.newClientObj.name);
                this.$router.push({ name: "الرئيسية" });
              } else {
                if (res.data.statusCode == 400) {
                  console.log(res);
                  this.showErr();
                  document.querySelector(".loading-3").style.width = 0 + "px";
                  this.errMsg = res.data.message;
                }
              }
            })
            .catch(() => {
              document.querySelector(".loading-3").style.width = 0 + "px";
              this.errMsg =
                "حدث خطأ ما برجاء اعادة مسح الكود والمحاولة مرة اخرى";
              this.showErr();
            });
        } else {
          this.errMsg = "برجاء ادخال رقم صالح";
          this.showErr();
        }
      } else {
        this.showErr();
        this.errMsg = "لا يمكنك ان تترك حقل فارغ";
      }
    },
    reRegister() {
      localStorage.removeItem("clientName");
      this.newClient = true;
      clearTimeout(this.delayedAction);
    },
    toHome() {
      this.$router.push({ name: "الرئيسية" });
      clearTimeout(this.delayedAction);
    },
    showErr() {
      document.getElementById("req").style.opacity = 1;
    },
  },
};
</script>

<style scoped>
@import url("~@/assets/componentsCss/registrationStyles.css");
</style>
