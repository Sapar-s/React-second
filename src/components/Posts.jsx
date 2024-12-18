import Post from "./Post";

const Posts = (props) => {
  return (
    <div className="postParent">
      {props.postsData.map((medee) => {
        return (
          <Post
            image={medee.imgSrc}
            tag={medee.tag}
            title={medee.title}
            ognoo={medee.who}
          />
        );
      })}
    </div>
  );
};

export default Posts;
