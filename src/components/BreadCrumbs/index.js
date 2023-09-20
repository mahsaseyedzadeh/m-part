'use client'
import { useEffect } from "react";
import { usePathname ,useRouter} from 'next/navigation';
import Link from "next/link";
import styles from './BreadCrumbs.module.scss';
import { useGetBreadCrumbs } from "@/components/Hooks/GetBreadCrumbs";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const path = useGetBreadCrumbs(pathname)



  useEffect(()=>{console.log(path)},[path])
  return (
    <ol className={styles.breadCrumbsWrapper}>
      <li>
        <Link href={pathname}>
          لیست کاربران
        </Link>
      </li>
      {path.map((item , index)=>(
        <li>
          <Link href={`/${item}`}>
            {item}
          </Link>
        </li>
      ))}
    </ol>
  )
}
export default BreadCrumbs