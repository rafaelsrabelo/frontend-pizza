import Head from "../../../node_modules/next/head"
import Link from '../../../node_modules/next/link'
import Image from "../../../node_modules/next/image"
import { Input } from "../../components/Input/index"
import { Button } from "../../components/Button/index"

import styles from "../../../styles/home.module.scss"
import logo from "../../../public/images/logo.svg"

export default function SignUp() {
  return (
      <>
        <Head>
          <title>Cadastrar</title>
        </Head>

        <div className={styles.containerCenter}>
          <Image src={logo} alt="Sujeito Pizza" />

          <div className={styles.login}>
            <h1>Criando sua conta</h1>
          </div>

          <div className={styles.login}>
            <form action="">
              <Input 
                placeholder="Digite seu Nome"
              />
              <Input 
                placeholder="Digite seu email"
              />
              <Input 
                placeholder="Sua senha"
              />
              <Button
                type="submit"
                loading={false}
              >
                Cadastrar 
              </Button>
            </form>
            <Link href="/">
                <a className={styles.text} href="#">Já possui uma conta? Faça seu login</a>
            </Link>
          </div>
        </div>
      </>
    )
}
