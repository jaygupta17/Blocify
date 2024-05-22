import { AirplayIcon, BookmarkIcon, HeartIcon, MessageCircleIcon, SmileIcon } from "lucide-react"
import { BiDotsHorizontal } from "react-icons/bi"
function Post() {

    return (
        <div className='h-full w-[80%] bg-white/15 my-7 border border-white/15 rounded-sm'>
            <div className="flex items-center gap-x-1 p-2">
               <div className="bg-red-900 h-10 aspect-square rounded-[50%]"></div>
                <p className='flex-1 font-bold'>obxto9</p>
                <BiDotsHorizontal className='h-5' />
            </div>

            <div className="bg-red-900 h-1/2 w-full "></div>
                <div className="flex justify-between px-3 pt-1">
                    <div className="flex space-x-4  ">
                                <HeartIcon className='btn text-red-500'/>
                        <MessageCircleIcon className='btn'/>
                        <AirplayIcon className='btn'/>
                    </div>
                    <BookmarkIcon className='btn' />
                </div>
        
            
            <p className="px-3 py-1 truncate">
        
                    <p className='font-bold mb-1'>80 likes</p>
        
                <span className='font-bold mr-1'>nigga</span>
                link in bio
            </p>
                <div className="w-full flex pl-3 justify-start items-center">
                    {/* {comments.map(comment => (
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img className='h-7 rounded-full' src={comment.data().userImage} alt="" />
                            <p className='text-sm flex-1'><span className='font-bold'>{comment.data().username}</span>{" "}{comment.data().comment}</p>
                            <Moment fromNow className='pr-5 text-xs'>
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))} */}
                      
                        <div key={"1"} className="flex justify-center items-center space-x-2 pt-2">
                            <div className="bg-red-900 h-10 aspect-square rounded-[50%]"></div>
                            
                            <p className='text-sm flex-1'><span className='font-bold'>onlyfun</span>{" "}{"literally me"}</p>
                        </div>
                
                </div>
                <form className="flex items-center p-4 gap-x-2">
                    <SmileIcon className='h-7 cursor-pointer' />
                    <input className='border-none px-2 h-7 flex-1 rounded-md focus:ring-0 outline-none' type="text"  placeholder='Add a comment...' value={"hehehe"} />
                    <button type='submit' className='font-semibold text-blue-400'>Post</button>
                </form>
     

        </div>
    )
}

export default Post