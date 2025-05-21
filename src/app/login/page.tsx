'use client'
import { useState } from "react"
import { signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from "firebase/auth"
import { auth, googleprovider } from "../../config/firebase"
import Link from 'next/link'

export default function Login() {

       const [email, setEmail] = useState('')
       const [password, setPassword]  = useState('')

       const signIn = async ()=>{
        await signInWithEmailAndPassword(auth, email, password)
        alert('login successful')
       }
        
       const signInWithGoogle = async()=>{
         try{
            await signInWithRedirect(auth, googleprovider)
         }
         catch(err){
            console.error(err)
         }
       }

    return (
        <>
            <div className=" bg-gradient-to-tr from-purple-400 to-[#040f0f] ">

                <section className=" w-screen  flex flex-col items-center justify-center relative min-h-screen">
                    <h1 className="text-center text-white text-3xl mb-12  quicksand-bold -mt-2 font-serif italic" >Sign in to stream!</h1>
                    <figure className="  rounded-full" >
                        <div className="absolute left-[47%] lg:-mt-[2%] p-2 rounded-full bg-black log-icon">
                            <img width="58" height="58" src="https://img.icons8.com/external-isometric-vectorslab/68/external-Headphones-christmas-and-new-year-isometric-vectorslab.png" alt="external-Headphones-christmas-and-new-year-isometric-vectorslab" className=' w-[38px] h-[38px] sm:w-[58px] sm:h-[58px]' />
                        </div>
                        <form onSubmit={signIn} className=" logform p-7 w-[85vw] md:w-[70vw] lg:w-[50vw] flex flex-col items-center rounded-l-2xl rounded-b-2xl md:rounded-l-full  md:rounded-b-full">
                            <h2 className="text-center text-md md:text-lg text-white mb-10 mt-5 quicksand-reg font-serif italic">
                                Welcome back to Melodywave </h2>
                            <fieldset className=" space-y-6 w-3/5">
                                <div className="relative w-full">
                                    <img width="24" height="24" src="https://img.icons8.com/ios/50/username.png" alt="username" className="absolute mt-3 mx-3 mr-3" />
                                    <input type="text" placeholder="  Enter your email address" className="px-9 py-3 rounded-full bg-slate-200 w-full quicksand-reg" value={email} onChange={(e)=> setEmail(e.target.value)} />
                                </div>

                                <div className="relative w-full">
                                    <img width="24" height="24" src="https://img.icons8.com/cotton/64/lock--v3.png" alt="lock--v3" className="absolute mt-3 mx-3 mr-3" />
                                    <input type="password" placeholder="  ••••••••••••" className="px-9 py-3 rounded-full bg-slate-200 w-full"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                </div>
                            </fieldset>
                            <button type="submit" className="mb-3 mt-5 px-10 py-2  rounded-full hover:opacity-80 bg-gradient-to-br from-yellow-200 via-black to-yellow-200 text-white">Login</button>
                        </form>
                        <p className="text-white font-serif italic text-center mb-3 mt-5">or</p>
                        {/* <hr/> */}
                          <div className="space-y-5">
                             <button onClick={signInWithGoogle} className="flex items-center justify-center space-x-10 shadow-md  bg-black/40 hover:opacity-70 cursor-pointer p-2 rounded-full w-3/4 mx-auto text-white">
                             <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/google-logo.png" alt="google-logo"/>
                                <span>Login with Google</span>
                             </button>

                             <button className="flex items-center justify-center space-x-10 shadow-md  bg-black/40 hover:opacity-70 cursor-pointer p-2 rounded-full w-3/4 mx-auto text-white">
                             <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png" alt="mac-os"/>
                                <span>Login with Apple</span>
                             </button>
                          </div> 
                    </figure>
                    {/* <p className="  mt-5">Don't have an account ? <Link href='/signup' className='text-yellow-300 hover:text-purple-200 text-lg mx-2'>Sign up here</Link></p> */}

                </section>
            </div>

        </>
    )
}