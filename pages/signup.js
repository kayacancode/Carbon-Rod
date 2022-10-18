import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import {
  createUserWithEmailAndPassword,

  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  onAuthStateChanged
 } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRouter } from "next/router";
import { collection, doc, setDoc } from "firebase/firestore";

const signup = () => {
  const router = useRouter();
  const userRef = collection(db, "users");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data,setData] = useState({
    name: "",
    email: "",
    dob: "",
    number: "",
    occupation: "",
    email: "",

  })

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
  }, []);

  const register = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      let pass = document.getElementById("password");
      pass.focus();
      pass.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    setLoading(true);

    try{
      const result = await createUserWithEmailAndPassword(auth, data.email,password);

      await setDoc(doc(userRef, result.user.uid),data);
      console.log(result);
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  const handleChange = (e) =>
    setData({...data, [e.target.name]: e.target.value});
   
  return (
    <form onSubmit = {register} >
    <div>
           {/* <div class="absolute w-48 h-48 rounded-xl bg-[#64c297] -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div> */}
	<div class = "flex h-screen">
    <div class = "m-auto">
  <div class="py-20  px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer ">Sign up</h1>
		</div>
		<div class="space-y-4">
			<input type="text" 
      placeholder="name" 
      value= {data.name}
      name ="name"
      onChange={handleChange}      
      class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" 
      />
      		<input type="text" 
      placeholder="DOB eg: 08/27/2000" 
      class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" 
      value={data.dob}
      name ="dob"
      onChange={handleChange}/>
      	<input type="text" 
      placeholder="Phone Number" 
      class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" 
      value={data.number}
      name ="number"
      onChange={handleChange}
      />
       	<input type="text" 
      placeholder="Occupation" 
      class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" 
      value={data.occupation}
      name ="occupation"
      onChange={handleChange}
      />
<input type="text" 
      placeholder="Email" 
      class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" 
      value={data.email}
      name ="email"
      onChange={handleChange}
      />
 
<input type="text" 
      placeholder="Create Password" 
      class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" 
      value={password}
      name ="password"

      onChange={(e) => setPassword(e.target.value)}
      />
    
    </div>
			<div class="text-center mt-6">
        {/* <Link href= "/dashboard"> */}
				<button 
        class="py-3 w-64 text-xl text-white bg-[#64c297] rounded-2xl"
        type = "submit"
        >
                  {loading ? "Loading..." : "Signup"}

         
          </button>
        {/* </Link> */}
				<p class="mt-4 text-sm">Already  have an account?  <span class="underline cursor-pointer"> Sign In</span>
				</p>
			</div>
		</div>
    </div>
    </div>
    </div>
    </form>
  )
}

export default signup