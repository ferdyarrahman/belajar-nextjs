<img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/arrow-left.svg" width="50" height="50">

## Halaman Baru dan Navigasi

Menambahkan halaman baru di **NextJs** dengan membuat file baru `pages/about.js`, tambahakn kode berikut :

```javascript
export default () => <div>Page About!!</div>;
```

jalankan http://localhost:3000/about pada browser makan akan muncul seperti gambar berikut:

![alt text](https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/navigasi/image-1.png)

Selanjutnya untuk menavigasikan halaman `about.js` pada halaman utama di sini `index.js`, modifikasi file `pages/index.js` seperti berikut :

```javascript
import Link from "next/link";

const Index = () => (
  <div>
    Hello world!
    <br />
    <Link href="/about">about</Link>
  </div>
);

export default Index;
```

Perhatikan kode di atas, pada bagian tag <Link></link> merupakan _higher order component_ atau disingkat dengan **HOC**.

Lanjut menambahkan navigasi untuk kembali ke halaman `index.js`, modifikasi file `pages/about.js` seperti berikut:

```javascript
import Link from "next/link";

const Index = () => (
  <div>
    Page About!!
    <br />
    <Link href="/">home</Link>
  </div>
);

export default Index;
```

Maka akan seperti berikut:

![alt text](https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/navigasi/image-2.png)
