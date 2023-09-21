'use client';
import { useGetUsers } from "@/components/Hooks/Users";
import { Table, Header, TableBody, Row } from "@/components/Global/Table";
import tableHeader from '../../utils/tableHeader';
import styles from './UsersList.module.scss';
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Context } from "@/context/Provider";


const UsersList = () => {
  const {isFetching, data ,isSuccess } = useGetUsers();
  const router = useRouter();
  const { setUsers ,state } =useContext(Context)
  const changeRouter = (id) =>{
    router.push(`/user/${id}`)
  }
  useEffect(()=>{
    if(isSuccess){
      setUsers(data)
    }
  },[isSuccess])

  return(
    <section className={styles.wrapper}>
      {isFetching ?
         <div className={'loading'}> ...loading users data </div>
        :
        <Table>
          <Header Titles={tableHeader}/>
          <TableBody>
            {state?.users?.map((user, index)=>(
              <Row key={index} columns={user} handleClick={changeRouter}/>
            ))}
          </TableBody>

        </Table>
      }

    </section>
  )
}
export default UsersList;