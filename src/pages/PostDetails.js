import React from 'react'

function PostDetails(props) {
    const { _Id } = props.match.params;
    const [comments, setComments] = useState([]);
  
    useEffect(() => {
      axios
        .get(`http://localhost:3000/posts=${_Id}`)
        .then(res => {
          console.log(res);
          setComments(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, [_Id]);
  
    return (
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    );
  }
  