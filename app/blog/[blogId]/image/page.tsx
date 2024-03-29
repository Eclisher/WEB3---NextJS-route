import Image from "next/image";

const BlogImagePage = ({params}: { params: { blogId: number } }) => {
    const imageUrl = `https://picsum.photos/200`;

    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="mb-3 font-bold text-2xl">This is Blog {params.blogId} image</h1>
            <Image src={imageUrl} alt={`Blog ${params.blogId}`} width={500} height={500} className="rounded-2xl"/>
        </div>
    );
}

export default BlogImagePage;