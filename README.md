# Belajar Dasar NextJs

_Next Js_ adalah framework _React Js_ agar lebih powerful, mulai dari kode per halaman menjadi lebih terstruktur,
sistem routing, hingga aplikasi yang dapat dideteksi oleh SEO.

## Daftar Pembahasan

- [Dokumentasi](#dokumentasi)
- [Installasi](#installasi)

## Documentation

Untuk dokumentasi NextJs lengkap, periksa [nextjs.org](https://nextjs.org/).

## installasi

Memulai berlajar nextjs kita akan membuat folder baru untuk menyimpan project nextjs. Jalankan perintah berikut ini pada terminal/CMD:

```bash
$ mkdir nextjs-basic
$ cd nextjs-basic
```

Selanjutnya buat `package.json` dapat menjalankan perintah berikut ini:

```bash
touch package.json
```

setelah file package.json terbentuk tambahakn buka tutup kurung agar tidak terjadi error, seperti berikut:

```js
{
}
```

install nextjs react dan react-dom, seperti berikut ini:

```bash
npm i --save next react react-dom
```

![alt text]({https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/installasi/image-1.png})

setelah proses installasi selesai makan akan terbentuk folder `node_modules`, file package-lock.json,
dan pada file package.json akan terdapat 3 dependencies yang di butuhkan seperti berikut :

```json
{
  "dependencies": {
    "next": "^13.1.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

Modifiksi `package.json` setelah `dependencies` seperti berikut:

```json
{
  "dependencies": {
    "next": "^13.1.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

Buat folder `pages` dan file `index.js`, Pada file `pages/index.js` tambahkan kode berikut:

```js
export default () => <div>Hello world!</div>;
```

Selanjutnya jalankan perintah berikut pada terminal/CMD :

```bash
npm run dev
```

![alt text]({https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/installasi/image-2.png})

secara default nextjs akan berjalan pada localhost dengan port 3000, buka https://localhost:3000 pada browser makan akan muncul seperti gambar berikut:
![alt text]({https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/installasi/image-3.png})
