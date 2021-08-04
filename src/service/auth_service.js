import {firebaseAuth, githubProvider, googleProvider} from './firebase';

class AuthService {
  //로그인
  login(providerName) {
    const authProvider = this.getProvider(providerName)
    return firebaseAuth.signInWithPopup(authProvider);
  }
  //로그아웃
  logout() {
    firebaseAuth.signOut();
  }
  //사용자가 바뀌었을때 체크
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  getProvider(providerName){
    switch(providerName){
      case 'Google':
      return googleProvider;
      case 'Github':
      return githubProvider;
      default : 
      throw new Error(`not surported provider ${providerName}`);
    }
  }
}

export default AuthService;
