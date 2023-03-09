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
