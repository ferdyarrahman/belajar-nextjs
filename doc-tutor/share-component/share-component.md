[< Kembali](../../../../#daftar-pembahasan)

## Berbagi Komponen

Membuat komponen yang bisa dibagikan atau digunakan oleh berbagai komponen lainnya.
Buat folder `components` dan buat file baru bernama Navigation.js.
tulis kode berikut ini di file `components/Navigation.js` :

```javascript
import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Navigation = () => (
  <div>
    <Link href="/">
      <span style={linkStyle}>Home</span>
    </Link>
    <Link href="/about">
      <span style={linkStyle}>About</span>
    </Link>
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
    <p>Hello world!</p>
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
    <p>This is the about page.</p>
  </div>
);

export default About;
```

Maka hasilnya seperti pada gambar berikut:

![alt text](https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/share-component/image-1.png)

[< Kembali](../../../../#daftar-pembahasan)
