const Post = () => {
  return (
    <div className="w-screen bg-[var(--clr-surface-a10)]">
      <div>
        <div className="flex gap-3 justify-between items-center flex-row px-3 border-b-1 border-[var(--clr-surface-a20)]">
          <div className="flex gap-3 items-center py-1 ">
            <div className="flex items-center rounded-full h-14 w-14 overflow-hidden  ">
              <img
                src="https://placehold.jp/3d4070/ffffff/150x150.png"
                alt=""
                width={"56px"}
              />
            </div>
            <div className="flex flex-col">
              <span>user name</span>
              <span>2024-12-25</span>
            </div>
          </div>

          <div>
            <img src="/icons/option.svg" alt="" />
          </div>
        </div>
        <div className="pl-4 pr-8 py-2">
          detail Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestias!
        </div>
      </div>
      <div className="px-1">
        <img src="/samplePost.jpg" alt="" />
      </div>
      <div>
        <div className="flex justify-between px-8 pt-2 border-t-1 border-[var(--clr-surface-a20)]">
          <span>145</span>
          <span></span>
          <span>14 comments</span>
        </div>
        <div className="flex justify-between px-8 py-2">
          <img src="/icons/like.svg" alt="" />
          <img src="/icons/comment.svg" alt="" />
          <img src="/icons/share.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Post;
