import Headphones from '@/shared/assets/icons/reshot-icon-headphone-Z5JQX8KP9H.svg'
import Like from '@/shared/assets/icons/like-svgrepo-com.svg'
import Comment from '@/shared/assets/icons/comments-3-svgrepo-com.svg'
import Autor from '@/shared/assets/icons/face-recognition-1-svgrepo-com.svg'

const Card = () => {
    return (
        <div className="border p-4 rounded shadow-2xl w-[80%] max-w-[500px] bg-gray-500">
            <div className="relative h-60 mb-4">
                <img
                    className="absolute w-full h-full object-cover rounded"
                    src={Headphones}
                    alt="/"
                />
            </div>
            <div>
                <p className="font-semibold">Apple Headphones</p>
                <p className="font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
                    libero similique et consequuntur velit laudantium, a dolorem
                    reprehenderit? Quas, odit.
                </p>

                <div className='flex justify-between mt-16'>
                    <img className='w-10' src={Like} alt="" />
                    <img className='w-10' src={Comment} alt="" />
                    <img className='w-10' src={Autor} alt="" />
                </div>
            </div>
        </div>
        )
}

export { Card }