// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  // const [blogs, setBlogs] = useState(null);
  // const [pending, setPending] = useState(true);
  // const [error, setError] = useState(null);
  
  //   let name = "snehel";
  //   const [name, setName] = useState("snehel");
  //   const [age, setAge] = useState(20);
  //   const click = (e) => {
  //      name = "ankur";
  //     setName("ankur");
  //     setAge(21);
  //   };
  //   const fclick = (name, e) => {
  //     console.log(`Hello ${name}`, e.target);
  //   };

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // const [name,setName] = useState("snehel");

  // useEffect triggers everytime whenever a component is re-rendered or a state is changed
  // so we use a dependency array and put all the states inside it whose value is changed & needed to be watched, now it will trigger the useEffect only when any of these states(mentioned under the dependency array) is changed

  // useEffect(() => {
  //   console.log("useEffect ran");
  //   console.log(blogs);
  //   console.log(name);
  // },[name,blogs]);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     fetch('http://localhost:8000/blogs')
  //     .then(res => {
  //       if(!res.ok){
  //         throw new Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then(data=>{
  //       // console.log(data);
  //       setBlogs(data);
  //       setPending(false);
  //       setError(null);
  //     })
  //     .catch(err => {
  //       // console.log(err.message)});
  //       setPending(false);
  //       setError(err.message)});
  //   },1000);
  // },[])

  const {data: blogs, pending, error} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">

      {/* <h2>Home Page</h2>
      <p>
        {name} is {age} years old
      </p>

      <button onClick={click}>Click me</button>

      <button onClick={(e) => fclick("snehel", e)}>Click again</button> */}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "snehel")}
        title={"| Snehel's blogs |"}
      /> */}

      {/* <button onClick={()=>setName('ankur')}>change name</button>
      <p>{name}</p>  */}

      {/* {blogs && <BlogList blogs={blogs} title={"| All blogs |"} handleDelete={handleDelete} />} */}
      {/* {blogs && <BlogList blogs={blogs} title={"| All blogs |"} />} */}

      { pending && <h2>Loading...</h2> }
      { blogs && <BlogList blogs={blogs} title={"| All blogs |"} />}
      { error && <div>{error}</div>}

    </div>
  );
};

export default Home;
