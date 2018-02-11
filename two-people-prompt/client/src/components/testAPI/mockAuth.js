const Auth = {
  isAuth: false,
  auth(cb) {
    this.isAuth = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuth = false;
    setTimeout(cb, 100);
  }
};

export default Auth;
