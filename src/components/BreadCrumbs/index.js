'use client'
import { usePathname } from 'next/navigation';
import Link from "next/link";
import styles from './BreadCrumbs.module.scss';
import { useGetBreadCrumbs } from "@/components/Hooks/GetBreadCrumbs";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const path = useGetBreadCrumbs(pathname);

  return (
    <ol className={styles.breadCrumbsWrapper}>
      <li>
        <Link href={'/'}>
          لیست کاربران
        </Link>
      </li>
      {path.map((item , index)=>(
        <li key={index}>
          <Link href={item.url}>
            {item.label}
          </Link>
        </li>
      ))}
    </ol>
  )
}
export default BreadCrumbs