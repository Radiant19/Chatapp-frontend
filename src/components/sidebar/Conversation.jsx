import React, { useEffect } from "react";
import useConversation from "../../zustand/newConvesation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  // console.log(isSelected)
  return (
    <>
      <div
        className={`flex gap-1.5 items-center hover:bg-white/10 rounded-lg p-1.5 py-2 cursor-pointer transition-all duration-200
      ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* <div className={`relative ${isOnline ? "online":""}`}>
          <img
            src={conversation.profilePic}
            alt="user avatar"
            className="w-9 h-9 rounded-full"
          />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-gray-900"></div>
        </div> */}

        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex gap-2 justify-between items-center">
            <p className="font-semibold text-gray-200 text-sm truncate">
              {conversation.fullname}
            </p>
          </div>
        </div>
      </div>
      {!lastIdx && (
        <div className="divider my-0 py-0 h-px before:bg-white/10 after:bg-white/10" />
      )}
    </>
  );
};

export default Conversation;
