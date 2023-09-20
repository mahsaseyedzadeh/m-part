"use client";
import Image from "next/image";

import Link from "next/link";
import { assets } from "../Helper";
import styles from './Logo.module.scss';
const Logo = () => {
  return (
    <Link href={'/'} className={styles.wrapper}>
      <Image fill src={assets(`/images/chingal-logo.png`)} alt={"logo"}/>
    </Link>
  )
}
export default Logo;