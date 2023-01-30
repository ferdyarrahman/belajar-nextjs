import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Navigation = () => (
  <div>
  <Link href='/'>
   <span style={linkStyle}>Home</span>
  </Link>
  <Link href='/about'>
  <span style={linkStyle}>About</span>
  </Link>
  </div>
)

export default Navigation