import Navigation from './Navigation'

const styleLayout = {
  margin:20,
  padding:20,
  border:"1px solid #DDD"
}

const Layout = (props) => (
  <div style={styleLayout}>
  <Navigation />
  <br/>
  {props.children}

  <p> Footer: Belajar NextJs Copyright 2023</p>

  </div>
)

export default Layout