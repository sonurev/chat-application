
const Conversation = () => {
  return (
    <>
    
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1592203144.1708584056&semt=sph" alt="user avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">Abhi Meena</p>
        </div>
      </div>
    </div>
    <div className="divider py-0 my-0 h-1"></div>
    </>
  )
}

export default Conversation

/*

const Conversation = () => {
  return (
    <>
    
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1592203144.1708584056&semt=sph" alt="user avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">Abhi Meena</p>
        </div>
      </div>
    </div>
    <div className="divider py-0 my-0 h-1"></div>
    </>
  )
}

export default Conversation
*/