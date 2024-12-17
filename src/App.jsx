import { useState } from 'react'

function App() {
  const [posts, setPosts] = useState([]);
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");

  const generateId = () => Date.now();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postName && postDescription) {
      const newPost = {
        id: generateId(),
        title: postName,
        description: postDescription
      };
      setPosts([...posts, newPost]);
      setPostName("");
      setPostDescription("");
    };
  };

  const handleDelete = (id) => {
    const newPosts = posts.filter((curPost) => curPost.id !== id);
    setPosts(newPosts);
  }
  return (
    <>
      <header className="bg-info text-center mb-3">
        <h1>I miei fantastici Post</h1>
      </header>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="postName" className='me-4'>Titolo:</label>
            <input
              type="text"
              id="postName"
              value={postName}
              onChange={(event) => setPostName(event.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="postDescription" className='me-4'>Descrizione:</label>
            <input
              type="text"
              id="postDescription"
              value={postDescription}
              onChange={(event) => setPostDescription(event.target.value)} />
          </div>
          <button type='submit' className='btn btn-success'>Aggiungi Post</button>
        </form>
        <div className="row mt-5">
          <div className="col d-flex justify-content-between flex-wrap row-gap-4">

            {posts.length > 0 ?
              posts.map((curPost) => (
                <div className='card' key={curPost.id}>
                  <div className='card-body'>
                    <h4 className='card-title'>{curPost.title}</h4>
                    <p className='card-text'>{curPost.description}</p>
                    <button onClick={() => handleDelete(curPost.id)}>🗑️</button>
                  </div>
                </div>

              )) : (
                <p className='fs-3'>Non ci sono post</p>
              )
            }

          </div>
        </div>

      </div>
    </>
  );
};

export default App
