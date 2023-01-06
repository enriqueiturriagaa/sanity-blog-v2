import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import urlFor from '../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

type Props = {
    posts: Post[];
}



function BlogList({ posts }: Props) {
    return (
        <div>

            {posts.map((post) => (
                <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                    <div className=" flex flex-col mb-10 group cursor-pointer ">
                        <div className=' group-hover:bg-[#EAFFF3] p-2 transition-transform duration-200 ease-out '>

                            <div>
                                <div className=''>
                                    <p className='font-gochi text-4xl'>
                                        {post.title}
                                    </p>
                                    <p className='font-roboto text-sm line-clamp-4'>
                                        {post.summary}
                                    </p>
                                    <p className='font-gochi group-hover:underline'>Read Post
                                        <ArrowUpRightIcon className='inline-block ml-1 h-4 w-4' />
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
                                            <div key={post._id} className=' text-center bg-[#FFEBE0] px-3 py-1 mr-2 text-sm font-gochi inline-block'>
                                                <p className=''>#{category.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ClientSideRoute>
            ))}
        </div>
    )
}

export default BlogList