import { groq } from "next-sanity"
import RightPannel from "../../../../components/RightPannel";
import { client } from "../../../../lib/sanity.client";
import author from "../../../../schemas/author";


type Props = {
    params: {
        slug: string;
    }
}
async function Post({ params: { slug } }: Props) {
    const query = groq`
        *[_type == "post" && slug.current == $slug][0] 
        {
            ...,
            author->,
            categories[]->
        }
    `

    const post: Post = await client.fetch(query, { slug });

    return (
        <div className="bg-[#FBFAFB] text-[#343434] flex  px-12">
            <article className="w-full lg:w-2/3  lg:pr-20 min-w-[60%]">
                <section>
                    <div className="mb-5">
                        <h1 className="font-gochi text-4xl">{post.title}</h1>

                        <p className="inline font-roboto text-gray-400 text-xs">Written by {post.author.name} on </p>
                        <p className="inline font-roboto text-gray-400 text-xs italics">
                            {new Date(post._createdAt).toLocaleDateString
                                ("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                })}
                        </p>
                        <div className='mt-2'>
                            {post.categories.map((category) => (
                                <div key={post._id} className=' text-center bg-[#FFEBE0] px-3 py-1 mr-2 text-sm font-gochi inline-block'>
                                    <p key={category._id} className=''>#{category.title}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="mb-5">

                    </div>

                </section>
            </article>
            <div className="font-gochi lg:1/3 hidden lg:inline max-w-md">
                <RightPannel />
            </div>
        </div>
    )
}

export default Post