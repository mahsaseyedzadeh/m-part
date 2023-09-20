import styles from './page.module.scss'
import BreadCrumbs from "@/components/BreadCrumbs";
import UsersList from "@/components/UsersList/UsersList";

export default function Users() {

  return (
      <main className={styles.main}>
        <BreadCrumbs/>
        <UsersList/>
      </main>
  )
}
