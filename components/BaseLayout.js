import Navigation from './Navigation'

const Layout = (props) => (
  <div>
  <Navigation />
  <br/>
  {props.children}

  <p> Footer: Belajar NextJs Copyright 2023</p>

  </div>
)

export default Layout