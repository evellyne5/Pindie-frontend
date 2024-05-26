import Styles from "./Footer.module.css"
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className={Styles["footer"]}>
      <a href="./index.html" className={Styles["footer__logo"]}>
        <span className={Styles["footer__logo-name"]}>pindie</span
        ><span className={Styles["footer__logo-copy"]}>, XXI век</span>
      </a>
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          <Link href="" className={`${Styles["button"]} ${Styles["social-list__link"]}`}>YT</Link>
        </li>
        <li className={Styles["social-list__item"]}>
          <Link href="" className={`${Styles["button"]} ${Styles["social-list__link"]}`}>VK</Link>
        </li>
        <li className={Styles["social-list__item"]}>
          <Link href="" className={`${Styles["button"]} ${Styles["social-list__link"]}`}>TG</Link>
        </li>
      </ul>
    </footer>
	)
}
