# Belajar Dasar NextJs

**NextJs** adalah framework **ReactJs** agar lebih powerful, mulai dari kode per halaman menjadi lebih terstruktur,
sistem routing, hingga aplikasi yang dapat dideteksi oleh SEO.

## Daftar Pembahasan

- [Dokumentasi](#dokumentasi)
- [Installasi](#installasi)
- [Halaman Baru dan Navigasi](doc-tutor/navigasi/navigasi.md)
- [Berbagi Komponen](doc-tutor/share-component/share-component.md)

## Dokumentasi

Untuk dokumentasi **NextJs** lengkap, periksa [nextjs.org](https://nextjs.org/).

## Installasi

Memulai berlajar **NextJs** kita akan membuat folder baru untuk menyimpan project **NextJs**. Jalankan perintah berikut ini pada terminal/CMD:

```bash
$ mkdir nextjs-basic
$ cd nextjs-basic
```

Selanjutnya buat `package.json` dapat menjalankan perintah berikut ini:

```bash
touch package.json
```

setelah file package.json terbentuk tambahakn buka tutup kurung agar tidak terjadi error, seperti berikut:

```javascript
{
}
```

install nextjs react dan react-dom, seperti berikut ini:

```bash
npm i --save next react react-dom
```

![alt text](https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/installasi/image-1.png)

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

```javascript
export default () => <div>Hello world!</div>;
```

Selanjutnya jalankan perintah berikut pada terminal/CMD :

```bash
npm run dev
```

![alt text](https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/installasi/image-2.png)

secara default **NextJs** akan berjalan pada localhost dengan port 3000, buka https://localhost:3000 pada browser makan akan muncul seperti gambar berikut:

![alt text](https://github.com/ferdyarrahman/belajar-nextjs/blob/main/doc-tutor/installasi/image-3.png)
