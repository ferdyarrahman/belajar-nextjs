import Link from 'next/link'

const Index = () => ( 
  <div>
    Hello world!
    <br/>
    <Link href="/about">
      about
    </Link>
  </div>
)

export default Index