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
    },
    posts: Post[],
}

export const revalidate = 60;

export async function generateStaticParams() {
    const query = groq`
        *[_type == "category"] {
            slug        
        }
    `;
    const slugs: Category[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);
    console.log(slugs);
    console.log(slugRoutes);
    return slugRoutes.map(slug => ({
        slug,
    }))
}


async function Cats({ params: { slug }, posts }: Props) {
    const query = groq`
   *[_type == "category" && slug.current == $slug] [0] {
    _id,
    _type,
    title,
    slug,
    description,
    "posts": *[_type == "post" && references(^._id)]{
        title,
        slug
}}
    `;

    const queryRel = groq`
        *[_type == "post"]{
            _type,
            title,
            slug,
            "category": *[_type == "category" && references(^._id)]{
                title,
                slug
        }}
    `



    const query2 = groq`
  *[_type == "category"]{
    _id,
    _type,
    title,
    slug,
    description,
    "posts": *[_type == "post" && references(^._id)]{
        title,
        slug
}
}`


    // const post: Post = await client.fetch(query, { slug });
    const category: Category = await client.fetch(query, { slug });
    const categories = await client.fetch(query2);
    const related = await client.fetch(queryRel);


    return (
        <div className="bg-[#FBFAFB] text-[#343434] flex  px-12">
            <article className="w-full lg:w-2/3  lg:pr-20 min-w-[60%]">
                <section>
                    <div className="mb-5">
                        <h1 className="font-gochi text-4xl">{category.title}</h1>

                        <p className="mt-2 font-roboto">{category.description}</p>
                        <p className="mt-8 text-lg font-gochi">Posts tagged with #{category.title}:</p>


                        <div className='mt-2'>
                            {related.map((post) => (
                                <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>

                                    <p className=' text-left bg-[#FFEBE0] px-3 py-1 mr-2 mb-2 text-sm font-gochi hover:bg-[#EAFFF3]'>
                                        {post.title}
                                    </p>

                                </ClientSideRoute>
                            ))}

                            {/* {categories.posts.map((posts) => (
                                <div className='inline-block'>
                                    <ClientSideRoute key={category._id} route={`/category/${category.slug.current}`}>

                                        <p className='inline-block text-center bg-[#FFEBE0] px-3 py-1 mr-2 mb-2 text-sm font-gochi'>
                                            #{category.title}
                                        </p>

                                    </ClientSideRoute>
                                </div>
                            ))} */}
                        </div>

                    </div>


                </section>
            </article>
            <div className="font-gochi lg:1/3 hidden lg:inline max-w-md">
                <RightPannel categories={categories} />
            </div>
        </div>
    )
}

export default Cats