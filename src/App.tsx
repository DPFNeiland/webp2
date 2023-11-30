import { Header } from './components/login/Header';
import { Container1 } from './components/login/container1';
import { Container2 } from './components/login/container2';

import styles from './App.module.css'
import './globals.css';

export default function Home() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Container1/>
        <Container2/>
      </div>
    </div>
  )
}