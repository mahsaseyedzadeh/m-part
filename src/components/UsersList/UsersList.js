'use client';
import { useGetUsers } from "@/components/Hooks/Users";
import { Table, Header, TableBody, Row } from "@/components/Global/Table";
import tableHeader from '../../utils/tableHeader';
import styles from './UsersList.module.scss';
import { useRouter } from "next/navigation";


const UsersList = () => {
  const {isFetching, isSuccess, data} = useGetUsers();
  const router =useRouter();
  const changeRouter = (id) =>{
    console.log(id)
    router.push(`/user/${id}`)
  }
  return(
    <section className={styles.wrapper}>
      {isFetching ?
         <span> ...loading </span>
        :
        <Table>
          <Header Titles={tableHeader}/>
          <TableBody>
            {data?.map((user, index)=>(
              <Row key={index} columns={user} handleClick={changeRouter}/>
            ))}
          </TableBody>

        </Table>
      }

    </section>
  )
}
export default UsersList;