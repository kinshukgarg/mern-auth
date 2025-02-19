import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import OAuth from "../componets/OAuth";


export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //this function used to be async because we are waiting for data 

  const handleSubmit=  async (e) =>{
    // with this page wont get refresh 
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res= await fetch('/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
      body:JSON.stringify(formData)
        });
        const data = await res.json();
        console.log(data) 
        setLoading( false)
        if (data.success === false) {
          setError(true);
          return;
        }
        navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(true);
    }
    
  };
 
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg "
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg "
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Fill password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg "
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-sm uppercase hover:opacity-95 disabled:opacity-80">
        {loading ? 'Loading...' : 'Sign Up'}

        </button>
        <OAuth/>
      </form>
      <div className="flex gap-5 mt-8">
        <p>Make an account </p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sigin</span>
        </Link>
        <div><p className="text-red-700 mt-5">{error && 'Something went wrong!'}</p></div>
      </div>
    </div>
  );
}
