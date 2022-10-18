import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from '../firebase'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "../firebase";
const signin = () => {

  const router = useRouter();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ email: "", password: "" });
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  const handleChange = (e) => {
    setAuthError(false);
    if (e.target.name === "email") {
      setUserError(false);
    }
    if (e.target.name === "password") {
      setPassError(false);
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email) {
      setUserError(true);
      return;
    }
    if (!form.password) {
      setPassError(true);
      return;
    }
    handleLogin(form.email, form.password);
  };
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // signed in
        const user = userCredential.user;
        router.push("/dashboard", undefined, { shallow: true });
      })
      .catch((error) => {
        console.log(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode === "auth/user-not-found")
          setAuthError("This email is not registered.");
        if (errorCode === "auth/wrong-password") setAuthError("Wrong password");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
           {/* <div class="absolute w-48 h-48 rounded-xl bg-[#64c297] -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div> */}
	<div class = "flex h-screen">
    <div class = "m-auto">
  <div class="py-20  px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer ">Sign In</h1>
		</div>
		<div class="space-y-4">
			<input type="text" 
      placeholder="Email address" 
      value= {form.email}
      name="email"
      onChange={handleChange}
      class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" 
      />
			<input type="text" 
      placeholder="Password" 
      class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" 
      value={form.password}
      name="password"

      onChange={handleChange}
      />
    </div>
			<div class="text-center mt-6">
       
				<button 
        class="py-3 w-64 text-xl text-white bg-[#64c297] rounded-2xl"
        type="submit"
        // onClick={() => signInWithEmailAndPassword(email, password)}
        >Sign in</button>
        
				<p class="mt-4 text-sm">Dont't have an account? <span class="underline cursor-pointer"> Sign In</span>
				</p>
			</div>
		</div>
    </div>
    </div>
    </div>
    </form>
  )
}

export default signin