import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <section>
        <h1>About</h1>
        <h3>Why Next?</h3>
        <p>
          <b>Easy routing</b>
          <br />
          Everything in page folder is accessible by just
          &apos;host/page_name&apos;.
          <br />
          <b>TypeScript &amp; Sass</b>
          <br />
          Just change the file extensions to .tx / .sass.
          <br />
          <b>Server-Side Rendering</b>
          <br />
          Unlike vanila React which load and render the entire application on
          client side, Next allows the first page load to be rendered by the
          server.
        </p>
      </section>
      <section>
        <h3>Lessons Learnt</h3>
        <p>
          1. Everything available is public folder is static files, which IS
          accessible from the browser.
          <br />
          2. globals.css can not be imported into components or pages.
          <br />
          3. Head from &apos;next/head&apos; is for enclosing title &amp; meta
          tag.
          <br />
          4. To create a overall layout for the site, create a Layout component,
          pass in children as prop into the layout; Then in _app.js, encapsulate
          the Component tag with newly created layout tag.
          <br />
          5. To navigate between pages, import Link from &apos;next/link&apos;,
          and href to any of the created pages.
        </p>
      </section>
    </div>
  );
};

export default about;
