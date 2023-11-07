function App() {
  return (
    <div className=" flex justify-center  ">
        <div className=" mx-auto">
            <h1 className=" font-bold sm:text-2xl md:text-3xl p-6 font-serif"> Tailwindcss Login Card</h1>
              <div className="card">
                <label className=" font-bold">Username:</label>
                  <input type="text" placeholder="Enter username" className="inputs" />
                <label className=" font-bold">Password:</label>
                  <input type="password" placeholder="Enter password" className="inputs"/>
                    <button className="buttons">Login</button>
                    <p className=' text-center'>
                      Sign up if you don't have an account
                    </p>
                    <button className="buttons bg-blue-600 active:bg-blue-800">Sign Up</button>
               </div>
               <div className=" mt-5 text-right hover:scale-105 hover:text-blue-700">
                <a  href="/" >Forgot Password?</a>
               </div>
          
        </div>
    </div>
  );
}

export default App;
