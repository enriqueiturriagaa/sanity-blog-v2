import Image from 'next/image';
import urlFor from '../lib/urlFor';

type Props = {
    posts: Post[];
}


function BlogList({ posts }: Props) {
    return (
        <div>

            {posts.map((post) => (
                <div key={post._id} className=" flex flex-col mb-10 group cursor-pointer">
                    <div className=' group-hover:scale-105 transition-transform duration-200 ease-out '>

                        <div>
                            <div className=''>
                                <p className='font-gochi text-4xl'>
                                    {post.title}
                                </p>
                                <p className='font-roboto'>
                                    {post.title}
                                </p>
                                {/* <p>
                                    {new Date(post._createdAt).toLocaleDateString
                                        ("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })}
                                </p> */}
                                <div className='mt-2'>
                                    {post.categories.map((category) => (
                                        <div key={post._id} className=' text-center bg-[#FFEBE0] px-3 py-1  text-sm font-gochi inline-block'>
                                            <p className=''>#{category.title}</p>
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