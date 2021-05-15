import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Home</title>
      </head>
      <body>
        <NavBar />
        <h1>Homepage</h1>
      </body>
    </html>
  )
}


