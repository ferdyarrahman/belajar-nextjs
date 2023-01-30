## Berbagi Komponen

Membuat komponen yang bisa disharing atau digunakan oleh berbagai komponen lainnya.
Buat folder `components` dan buat file baru bernama Navigation.js.
tulis kode berikut ini di file `components/Navigation.js` :

```javascript
import Link from "next/link";

const Navigation = () => (
  <div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
  </div>
);

export default Navigation;
```

Selanjutnya dapat modifikasi kode pada file `pages/index.js` dan `pages/about.js`.
Hapus `import Link from 'next/link'` dan modifikasi seperti berikut ini:

File `pages/index.js`

```javascript
import Navigation from "../components/Navigation";

const Index = () => (
  <div>
    <Navigation />
    Hello world!
  </div>
);

export default Index;
```

File `pages/about.js

```javascript
import Navigation from "../components/Navigation";

const About = () => (
  <div>
    <Navigation />
    Page About!!
  </div>
);

export default About;
```
