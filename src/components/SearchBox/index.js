'use client'
import styles from './SearchBox.module.scss';
const SearchBox = () => {
  return (
    <div className={styles.wrapper} >
      <span aria-label={'search-icon'}/>
      <input placeholder={'جستجو'}/>
    </div>
  )
}
export default SearchBox