[< Kembali](../../../../#daftar-pembahasan)

## Layout Component

**NextJs** menawarkan konsep _Layout Component_ untuk berbagi bagian besar yang ingin dibagikan di berbagai komponen.
Seperti contoh pembuatan layout website yang terdapat _navigation_, _sidebar_, _footer_, dan lain-lain.
Buat file baru `Component/BaseLayout.js` tulis kode berikut:

```javascript
import Navigation from "./Navigation";

const Layout = (props) => (
  <div>
    <Navigation />
    <br />
    {props.children}

    <p> Footer: Belajar NextJs Copyright 2023</p>
  </div>
);

export default Layout;
```

Pada kode di atas `import Navigation from './Navigation'` untuk memanggil komponen navigasi yang nantinya tidak perlu lagi diimport di setiap halaman.
Untuk konten yang akan di tampilkan pada layout dapat di tulis `{props.children}`.

Selanjutnya modifikasi halaman yang akan menggunakan layout. Buka file `pages/index.js` modifikasi kode seperti berikut:

```javascript
import Layout from "../components/BaseLayout";

const Index = () => <Layout>Hello world!</Layout>;

export default Index;
```

Maka hasilnya seperti pada gambar di bawah ini:

![alt text](https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/layout-component/image-1.png)

[< Kembali](../../../../#daftar-pembahasan)
