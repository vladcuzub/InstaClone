import React, { useState, useContext, } from "react";
import Image from "next/image";
import dots from "../assets/dots.png";
import hearth from "../assets/hearth.png";
import commentpic from "../assets/comment.png";
import message from "../assets/message.png";
import redhearth from "../assets/redhearth.png";
import moment from "moment";
import Login from "./Login";

const dateTimeAgo = moment()
  .startOf("minute")
  .fromNow();

const Post = ({ id, username, profilePic, postPhoto, caption }) => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [like, setLike] = useState(false);
  const [likeCount, setlikeCount] = useState(0);
  const [commentCount, setcommentCount] = useState(0);

  {
    /*Like post */
  }
  const handleLike = () => {
    setLike((like) => !like);
    if (like) {
      setlikeCount(likeCount - 1);
    } else {
      setlikeCount(likeCount + 1);
    }
  };

  {
    /*Add comment */
  }
  const handleComment = (e) => {
    e.preventDefault();
    if (comment) {
      const newComment = { id: Math.random() * 23502, title: comment };
      setCommentsList([...commentsList, newComment]);
      setComment("");
    }
  };
  
  return (
    <div>
      {/* Hedear*/}
      <div className="border rounded-lg my-3">
        <div className="flex items-center p-3">
          <div className="flex items-center w-full">
            <div className="h-8 w-9 mr-3">
              <img src={profilePic} alt="piclogo" className="rounded-full" />
            </div>
            <div className="">
              <p className="font-semibold text-sm">{username}</p>
            </div>
          </div>
          <div className="h-6 w-6">
            <Image src={dots} alt="dots" />
          </div>
        </div>
        {/* Photo*/}
        <div className="flex">
          <img src={postPhoto} alt="photopost" />
        </div>

        <div className="m-3">
          {/* Buttons*/}
          <div className="">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div className="Btn" onClick={handleLike}>
                  {like ? (
                    <Image src={redhearth} alt="redhwhite" />
                  ) : (
                    <Image src={hearth} alt="hearthwhite" />
                  )}
                </div>
                <div className="Btn">
                  <Image src={commentpic} alt="commentPic" />
                </div>
                <div className="Btn">
                  <Image src={message} alt="message" />
                </div>
              </div>
            </div>
            <div className="mt-2 font-bold">
              <p>{likeCount} likes</p>
            </div>
          </div>
          {/* Captions*/}
          <div className="flex items-center mt-2">
            <p className="mr-2 font-bold whitespace-nowrap">{username}</p>
            <p>{caption}</p>
          </div>
          {/* view all comment */}
          {commentsList.length > 0 && (
            <button className="text-sm text-gray-500 mt-1 ">
              View all {commentsList.length} Comments
            </button>
          )}
          {/*Comments*/}
          {commentsList.map((item) => (
            <div
              className="h-15 overflow-y-auto scrollbar-thin scrollbar-thumb-black"
              key={item.id}
            >
              <div className="max-w-24 overflow-y-auto flex justify-between mt-2 ">
                <div className="flex items-center ">
                  <p className="mr-2 font-bold"> </p>
                  <p className="mr-2" key={item.id}>
                    {item.title}
                  </p>
                </div>
                <div className="h-3 w-3 items-center">
                  <Image src={hearth} alt="hearth" />
                </div>
              </div>
              <p className="text-gray-400 text-xs my-2 flex">{dateTimeAgo}</p>
            </div>
          ))}

          {/* Time comment */}

          <div className="border-t -mx-3 my-3 "></div>

          {/*Inputs*/}
          <div className="flex justify-between">
            <div className="">
              <input
                className="outline-0 w-44"
                type="text"
                placeholder="Add comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button
              className="font-bold text-sm text-[#4fb2ce]"
              type="submit"
              onClick={handleComment}
            >
              Post
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Post;
