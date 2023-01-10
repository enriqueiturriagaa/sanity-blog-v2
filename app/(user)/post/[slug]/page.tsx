import { groq } from "next-sanity"
import RightPannel from "../../../../components/RightPannel";
import { client } from "../../../../lib/sanity.client";
import author from "../../../../schemas/author";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import ClientSideRoute from "../../../../components/ClientSideRoute";



type Props = {
    params: {
        slug: string;
    }
}



export const revalidate = 60;

export async function generateStaticParams() {
    const query = groq`
        *[_type == "post"] {
            slug
        }
    `;
    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);
    return slugRoutes.map(slug => ({
        slug,
    }))


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
    const query2 = groq`
  *[_type == "category"]{
    _id,
    _type,
    title,
    slug,
    "posts": *[_type == "post" && references(^._id)]{
        title,
        slug
}
}`


    const post: Post = await client.fetch(query, { slug });
    const categories = await client.fetch(query2);


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
                                <div key={post._id} className='inline-block'>
                                    <ClientSideRoute key={category._id} route={`/category/${category.slug.current}`}>

                                        <p className='inline-block text-center bg-[#FFEBE0] px-3 py-1 mr-2 mb-2 text-sm font-gochi'>
                                            #{category.title}
                                        </p>

                                    </ClientSideRoute>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="mb-5">
                        {/* RTE Here! */}
                        <PortableText value={post.body} components={RichTextComponents} />
                    </div>

                </section>
            </article>
            <div className="font-gochi lg:1/3 hidden lg:inline max-w-md">
                <RightPannel categories={categories} />
            </div>
        </div>
    )
}

export default Post