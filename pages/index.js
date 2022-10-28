import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"/>
      </Head>

      <Navbar />
      <div class = "flex h-screen">
        <div class = "m-auto">
      <div className = "text-center text-5xl block  bold text-[#64c297]">
        Welcome to the Tree of Life <br />
        Tree finder tool for optimal Carbon Sequestration < br />
        <Link href= "/">
				<button class=" my-10 py-3 w-64 text-xl text-white bg-[#64c297] rounded-2xl">Get Started</button>
        </Link>
        </div>
        </div>
        </div>
        <footer className = "w-full h-full fixed left-0 bottom-0 flex justify-center items-center -z-50">
        <img src= "/bg.png" alt='logo'  width="100%" height="full" className="absolute -bottom-5 left-0 " /></footer>
    
    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
    <div className="flex flex-col justify-center items-center">
    <h1 className="	 text-5xl" >Our one of a kind product utilizes Artificial intelligence and IOT
                        technology to accurately predict the best tree to plant at any given location to maximize
                        biosequestration potential</h1>
                        <img src="/diagram.png" className = "justify-center items-center text-center pt-10"alt="% graph"  width= "30%" height="30%"/>

</div>
    </section>

    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
    <div className="flex flex-col justify-center items-center">
    <h1 className="	 text-5xl">FEATURES</h1>

    <h2>Rechargeable Deep Cycle Battery</h2>
    <h2>Carbon Dioxide Sensor</h2>
    <h2>Soil Nutrient Sensor</h2>
    <h2>5 GHz Wi-Fi </h2>
    <h2>Up to 4000 Modules</h2>
    <h2>GPS Module</h2>
    <h2>SHA-256 Encryption</h2>
    <img src="/final.jpg" className = "justify-center items-center text-center pt-10"alt="% graph"  width= "30%" height="30%"/>


</div>
    </section>
  
    
    </div>
  )
}
