import Anchor from "./Anchor";
export default function Layout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Anchor href="/">Home</Anchor>
          </li>
          <li>
            <Anchor href="/dogs/henry">Henry</Anchor>
          </li>
        </ul>
      </nav>
      {/*content */}
      <main>{children}</main>
      <footer>FOOTER</footer>
    </>
  );
}
/* Links
Layouts

https://nextjs.org/docs/basic-features/layouts*/

// components/Layout.js
/* 
export default function Layout ({children}) {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li><Anchor href="/">Home</Anchor></li>
              <li><Anchor href="/dogs/henry">Henry</Anchor></li>
            </ul>
          </nav>
        </header>
  
        <main>{children}</main>
  
        <footer>Footer content</footer>
      </>
    )
  } */
