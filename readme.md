# Repo Latihan Authentication Reactjs & Json-Server

## install json-server

    Todo:
        1.  Install JSON Server
            - jika belum pernah install json server secara global:
                - npm install -g json-server
            - jika sudah pernah install json server secara global:
                - json-server --watch db.json
                - akan ada file db.json yang terbuat pada file directory
        2.  db.json
            - buat json object users
        3.  pengujian pada browser:
            - http://localhost:3000/users

## Install Package

    Todo:
        1.  Install Package
            - npm install axios bootstrap react-router-dom concurrently
            - keterangan:
                * axios : sebuah library JavaScript yang digunakan untuk melakukan permintaan HTTP ke server
                  dan mengambil data yang diperlukan dari API. Paket ini sering digunakan dalam pengembangan
                  aplikasi web dan mobile.
                * bootstrap : sebuah framework CSS yang digunakan untuk mempercepat pengembangan
                  tampilan halaman web dan mobile dengan menyediakan komponen-komponen visual
                  dan layout yang siap pakai.
                * react-router-dom : sebuah library JavaScript yang digunakan untuk mengelola routing
                  atau navigasi halaman pada aplikasi web dengan menggunakan React, sehingga pengguna
                  dapat beralih antar halaman
                  dengan cepat dan mudah.
                * concurrently : sebuah paket npm yang digunakan untuk menjalankan beberapa perintah
                  secara bersamaan dalam satu terminal. Paket ini berguna ketika kita ingin menjalankan
                  beberapa proses atau server sekaligus dalam satu proyek Node.js.

        2.  package.json
            - setup concurently agar sekali perintah dapat menjalankan server dan aplikasi secara bersamaan
        3.  Pengujian
            - pada terminal ketikan perintah: npm run all

## Setup Template

    Todo:
        1.  Home.jsx
        2.  App.jsx
            - import dan pasang {BrowserRouter,Routes,Route}
            - import dan pasang Home
        3.  index.css
        4.  main.jsx
            - import bootsrap module
        5.  asset/images
            - simpan file image2

## Register page

    Todo:
        1.  Home.jsx
            - cut code bagian nav
        2.  components/Navbar.jsx
            - pastekan code bagian nav dari Home.jsx
        3.  auth/Register.jsx
            - deklarasi hooks register
            - import pasang useNavigate dari react-router-dom
            - buat dan pasang handleSubmit
            - pasang toastify
            - buat dan pasang function genderChange
        4.  install react-toastify
            - npm i react-toastify
        5.  main.js
            - import toastify module
        6.  App.js
            - import dan pasang ToastContainer
        7.  auth/Login.jsx
        8.  Pengujian pada browser :
            - lakukan registrasi form
            - jika berhasil akan diredirect ke path '/auth/login
            - dan akan ada toastify success

## Login page

    Todo:
        1.  auth/Login.jsx
            - deklarasi hooks login
            - pasang useNavigate dari react-router-dom
            - buat dan pasang submitLogin
            - pasang onchange
            - pasang toastify untuk notifikasi
        2.  App.js
            - daftarkan route login
        3.  components/Navbar.jsx
            - deklarasi hooks islogged dan pasang sebagai logic untuk menu
            - pasang useEffect  untuk memeriksa apakah ada data username yang tersimpan di session storage.
            - ketika belum login button login dan register tampil,
              namun button logout tidak tampil
            - ketika sudah  login button login dan register disembunyikan,
              namun button logout akan tampil
        4. pengujian pada browser:
            - pada halaman home klik button login/ http://localhost:5173/auth/login
            - lakukan logi dengan user yang terdaftar
            - jika berhasil akan ada notifikasi login berhasil dan redirect kehalaman home

## Validasi dan prtection route ketika sudah login

    Todo:
        1.  auth/Login.jsx
            - buat dan pasang  validasi username and password
            - protected redirect ketika sudah login
        2. pengujian pada browser:
            - pada halaman home klik button login/ http://localhost:5173/auth/login
            - lakukan logi dengan mengosongkan form , maka akam ada notifikasi gagal login
            - jika mengisi dengan user terdaftar akan berhasil akan ada notifikasi login berhasil
              dan redirect kehalaman home,
            - jika setelah login berhasil mencoba masuk kehalaman login akan kembali diarahkan kehalaman home

## Logout

    Todo:
        1.  components/Navbar.jsx
            - buat dan pasang handleLogout
        2.  pengujian pada browser:
            ketika sudah login , klik button logout
            - buka juga inspsek lalu -> aplication dan pilih session storage
            - jika tombol logout di klik sesion akan dihapus ,
            - setelah session dihapus akan di redirect kehalaman home dan
              menampilkan button login ,register dan menyembunyikan button logout

## Validasi Register dan prtection route ketika sudah login

    Todo:
        1.  components/IsValidate.jsx
            - buat function Validate yang isinya
              akan menghanlde jika user tidak mengisi form dengan benar
        2.  auth/Register.jsx
            - import dan pasang IsValidate
        3.  pengujian pada browser:
            - pada halaman home klik button register, kemudian coba submit dengan
              mengosongkan data, jika setup yang kita lakukan berhasil
              maka akan ada pesan peringatan
        4.  auth/Register.jsx
            - simpan data di dalam sessionStorage browser.
            - protected redirect ketika sudah login
            - mengakses data yang telah disimpan pada sessionStorage, jika ada true
        5. pengujian pada browser:
            - pada halaman home klik button login/ http://localhost:5173/auth/login
            - lakukan logi dengan mengosongkan form , maka akam ada notifikasi gagal login
            - jika mengisi dengan user terdaftar akan berhasil akan ada notifikasi login berhasil
              dan redirect kehalaman home,
            - jika setelah login berhasil mencoba masuk kehalaman register akan kembali diarahkan kehalaman home
