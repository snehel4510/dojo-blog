import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Snehel');
    const [pending,setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();  // prevents page from refreshing on submit button click
        const blog = {title,body,author}; // creates an object with the values of the inputs, we don't need to create the id field bcoz that is automatically set by the json-server after we make a post request to it

        // console.log(blog);
        setPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            // console.log('Blog created');
            setPending(false);
            history.push('/');  // go back to the home page after creating a blog
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Snehel">Snehel</option>
                    <option value="Ankur S">Ankur S</option>
                    <option value="Ankur M">Ankur M</option>
                </select>
                {!pending && <button>Add blog</button>}
                {pending && <button disabled>Adding blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}
 
export default Create;