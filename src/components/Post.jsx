const Post = (props) => {
  return (
    <div className="post">
      <div>
        <img src={props.image} alt="" />
      </div>
      <div className="postr">
        <h4>{props.tag}</h4>
        <h3>{props.title}</h3>
        <p>{props.ognoo}</p>
      </div>
    </div>
  );
};

export default Post;
