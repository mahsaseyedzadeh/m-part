'use client'
import styles from './SearchBox.module.scss';
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Context } from "@/context/Provider";
import { useGetUsers } from "@/components/Hooks/Users";
const SearchBox = () => {
  const pathname = usePathname();
  const { setUsers  } = useContext(Context);
  const { data  } = useGetUsers();

  const searchHandler = (event) => {
    let value = event.target.value.toUpperCase();
    if(value){
      let temp = [...data]
      const filteredUsers = temp.filter((user)=>user.name.toUpperCase().indexOf(value) > -1);
      setUsers(filteredUsers)
    }else {
      setUsers(data)
    }
  }
  return (
    <>
      {pathname === '/' &&
        <div className={styles.wrapper} >
        <span aria-label={'search-icon'}/>
        <input placeholder={'جستجو'} onChange={searchHandler}/>
      </div>
      }
    </>

  )
}
export default SearchBox;