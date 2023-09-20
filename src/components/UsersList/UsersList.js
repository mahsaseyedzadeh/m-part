'use client';
import { useGetUsers } from "@/components/Hooks/Users";
import { Table, Header, TableBody, Row } from "@/components/Global/Table";
import tableHeader from '../../utils/tableHeader';
import styles from './UsersList.module.scss';


const UsersList = () => {
  const {isFetching, isSuccess, data} = useGetUsers();
  return(
    <section className={styles.wrapper}>
      {isFetching ?
         <span> ...loading </span>
        :
        <Table>
          <Header Titles={tableHeader}/>
          <TableBody>
            {data?.map((user, index)=>(
              <Row key={index} columns={user}/>
            ))}
          </TableBody>

        </Table>
      }

    </section>
  )
}
export default UsersList;