'use client'
import styles from './SingleUser.module.scss';
import Form from "@/components/Form";
import { useGetUser } from "@/components/Hooks/Users";
import { useParams } from "next/navigation";
const SingleUser = () => {
  const { id } = useParams()
  const { data : user ,isFetching } = useGetUser(id)
  return(
    <section className={styles.wrapper}>
      {isFetching ?  <span>...loading</span> :
        <div className={styles.card}>
        <Form userData={ user}/>
      </div>

      }

    </section>
  )
}
export default SingleUser;