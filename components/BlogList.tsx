import Image from 'next/image';
import urlFor  from '../lib/urlFor';

type Props = {
    posts: Post[];
}


function BlogList({ posts }:Props) {
  return (
    <div>
        <hr className="border-[#222733] mb-10 mx-20"/>
        {posts.map((post) => (
            <div key={post._id} className=" flex flex-col mb-10 group cursor-pointer">
                <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out '>
                    <Image
                        className="object-cover object-left lg:object-center"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                    <div>
                        <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg p-5 flex justify-between'>
                            <p className='font-bold'>
                                {post.title}
                            </p>
                            <p>
                                {new Date(post._createdAt).toLocaleDateString
                                ("en-US", {
                                    day: "numeric", 
                                    month: "long", 
                                    year: "numeric"
                                    })}   
                            </p>    
                        <div>
                           {post.categories.map((category) => (
                            <div  key={post._id} className='bg-[#222733] text-center text-[#0F6378] px-3 py-1 rounded-full text-sm font'>
                                <p className='font-bold'>{category.title}</p>
                            </div>
                           ))}
                        </div>
                        </div> 
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BlogList