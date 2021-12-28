import Link from "next/link";
import styles from "../styles/NamesContainer.module.scss";

export default function NamesContainer({ names }) {
  return (
    <ul className={styles.container}>
      {names.map((name: string) => {
        return (
          <Link key={name} href={`/users/${name}`}>
            {name}
          </Link>
        );
      })}
    </ul>
  );
}
