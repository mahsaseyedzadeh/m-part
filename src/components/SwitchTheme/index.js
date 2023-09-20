'use client'
import styles from "./SwitchTheme.module.scss";
import {useRef} from "react";

const Switch = ({name, label, checked = false, onChange = () => {}, value = true}) => {
  const input = useRef(null);

  const toggle = () => {
    input.current.click();
  }
  return (
    <div className={styles.Switch}>
      {label && <label onClick={toggle}>{label}</label>}
      <input className={styles.switchParent} type="checkbox" ref={input} value={value} onChange={onChange} name={name} checked={checked} />
      <span onClick={toggle} className={`${styles.box}  ${ checked && styles.box___checked}`}><span/></span>
    </div>
  );
}

export default Switch;