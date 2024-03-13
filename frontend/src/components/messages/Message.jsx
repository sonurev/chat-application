
const Message = () => {
  return (
    <div className="chat chat-end">
      <div  className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="avatar image" src={"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1592203144.1708584056&semt=sph" } />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 `}>Hi! what is  upp?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message;
