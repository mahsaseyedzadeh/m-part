import  styles from './Table.module.scss';
export const Table = ({children}) => {
  return(
    <table className={styles.tableWrapper}>
      {children}
    </table>
    )
}
export const TableBody = ({children}) => {
  return(
    <tbody>
      {children}
    </tbody>
  )
}
export const Row = ({columns ,handleClick}) => {
  return(
    <>
      {columns &&
        <tr className={styles.row} onClick={()=>handleClick(columns.id)}>
            <td>
              {columns.name}
            </td>
          <td>
            {columns.dateOfBirth}
          </td>
          <td>
            {columns.phoneNumber}
          </td>
          <td>
            {columns.email}
          </td>
          <td>
            {columns.street}
          </td>
          <td>
            {columns.company}
          </td>
        </tr>
      }
    </>

  )
}
export const Header = ({Titles}) => {
  return(
    <>
      {Titles &&
        <thead className={styles.HeaderWrapper}>
        {Titles.map((title , index)=>(
          <th key={index}>
            {title}
          </th>
        ))}

        </thead>
      }

    </>

  )
}

