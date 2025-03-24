import Post from "../Post/Post";

const Wall = () => {
  return (
    <div className="h-[100%] overflow-scroll flex flex-col gap-1 pt-1 pb-28">
      <Post />
      <Post />
    </div>
  );
};
export default Wall;
