export default function Login (){
return(
    <>
        <body class=" bg-gradient-to-tr from-purple-400 to-[#040f0f]">

<main class="container flex flex-col items-center justify-center relative  h-screen">
    <h1 class="text-center text-white text-3xl mb-12  quicksand-bold -mt-2">HELLO AGAIN!</h1>
<figure className="  rounded-full" >
        <div class="absolute left-[47%]-mt-[6%] lg:-mt-[2%] p-2 rounded-full bg-white ">
        <img width="55" height="55" src="https://img.icons8.com/bubbles/50/user.png" alt="user"/>
    </div>
    <form action=""  method="POST" class=" logform p-7 w-[85vw] sm:w-[50vw] flex flex-col items-center rounded-l-full  rounded-b-full">
    <h2 class="text-center text-md md:text-lg text-white mb-10 mt-5 quicksand-reg font-serif italic">
       Welcome back to Melodywave </h2>
    <fieldset class=" space-y-6 w-3/5">
        <div class="relative w-full">
            <img width="24" height="24" src="https://img.icons8.com/ios/50/username.png" alt="username"  class="absolute mt-3 mx-3 mr-3"/>
            <input type="text" placeholder="  Enter your email address" class="px-9 py-3 rounded-full bg-slate-200 w-full quicksand-reg"/>
        </div>

        <div class="relative w-full">     
            <img width="24" height="24" src="https://img.icons8.com/cotton/64/lock--v3.png" alt="lock--v3" class="absolute mt-3 mx-3 mr-3"/>
            <input type="password" placeholder="  ••••••••••••" class="px-9 py-3 rounded-full bg-slate-200 w-full"/>
        </div>
    </fieldset>
      <button type="submit" className="mb-3 mt-5 px-10 py-2  rounded-full hover:opacity-80 bg-black text-white">Login</button>
    </form>
</figure>

</main>
</body>

    </>
)
}