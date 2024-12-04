import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <img
          className={styles.logo}
          src="https://pyxis.nymag.com/v1/imgs/bc9/ccb/936534d0b82b77cf0ffbac92010ee38ea3-06-al-pacino.2x.rvertical.w512.jpg"
          alt="Next.js logo"
          width={250}
          height={312}
        />
      </main>
      <Heading size="2xl">Thank you for coming by...</Heading>

      <footer className={styles.footer}>
        <Link href="/travel/korea">
          {/* <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          /> */}
          Korea
        </Link>
        <Link href="travel/japan">Japan</Link>
        <Link href="/teapots">Teapots</Link>
      </footer>
    </div>
  );
}
