// import SignUpForm from "../../components/SignUpForm/SignUpForm"
// import LoginForm from "../../components/LoginForm/LoginForm"

// export default function AuthPage(props){
//     return(
//       <main>
//         <h1>AuthPage</h1>
//         <SignUpForm setUser={props.setUser}/>
//         <LoginForm setUser={props.setUser}/>
//       </main>
//     )
// }
import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}