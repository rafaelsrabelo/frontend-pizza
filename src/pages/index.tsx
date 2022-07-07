import Head from "../../node_modules/next/head"
import Link from '../../node_modules/next/link'
import styles from "../../styles/home.module.scss"
import logo from '../../public/images/logo.svg'
import Image from "../../node_modules/next/image"
import { Input, TextArea } from "../components/Input/index"
import { Button } from "../components/Button/index"

export default function Home() {
  return (
      <>
        <Head>
          <title>title da home</title>
        </Head>

        <div className={styles.containerCenter}>
          <Image src={logo} alt="Sujeito Pizza" />

          <div className={styles.login}>
            <form action="">
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
                Acessar 
              </Button>
            </form>
            <Link href="/signup">
              <a className={styles.text} href="#">Não possuí uma conta? Cadastre-se</a>
            </Link>
          </div>
        </div>
      </>
    )
}
