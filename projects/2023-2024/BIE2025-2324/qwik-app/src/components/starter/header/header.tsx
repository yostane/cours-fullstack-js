import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sample">Test</Link>
          </li>
          <li>
            <Link href="/demo/flower">Flowers demo</Link>
          </li>
          <li>
            <Link href="/demo/todolist">Todo list demo</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
