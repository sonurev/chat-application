import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const {loading,conversations} = useGetConversations();
  console.log("conversations:",conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation)=>(
        <Conversation key={conversation._id} conversation={conversation}
        lastIdx={conversations.length-1}
        />
      ))}
      { loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations;

/*
import Conversation from './Conversation'
const Conversations = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
    </div>
  )
}

export default Conversations
*/