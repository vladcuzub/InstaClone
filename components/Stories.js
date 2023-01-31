import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "../components/Story";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(
      [...Array(15)].map(() => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
      }))
    );
  }, []);

  return (
    <div>
      <div className="flex space-x-4 bg-white border overflow-x-scroll mx-1 rounded-lg scrollbar-thin p-5">                                                                                   
      {stories.map((story) => (
          <Story
            key={story.userId}
            username={story.username}
            avatar={story.avatar}
            alt='pic'
          />
        ))}                                                                                                                                        
      </div>
    </div>
  );
};

export default Stories;
