<template>
  <div class="login">
    <h3>Sign in</h3>
    <input type="text" v-model="email" placeholder="Email" name="" id="" />
    <input
      type="password"
      v-model="passWord"
      placeholder="PassWord"
      name=""
      id=""
    />
    <button type="button" @click="login">Connection</button>
    <button type="button" @click="signUp">Sign up</button>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      passWord: "",
    };
  },
  methods: {
    login() {
      this.$router.replace("/home");
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.passWord)
        .then(this.susscess(), this.error);
    },
    susscess(res) {
      console.log(res);
    },
    error(er) {
      console.log(er);
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  margin-top: 40px;
  input {
    margin: 10px 0 10px 40%;
    width: 20%;
    padding: 15px;
    display: block;
  }
  button {
    display: block;
    margin: 20px 0 20px 40%;
    padding: 10px;
    width: 20%;
    cursor: pointer;
  }
}
</style>
