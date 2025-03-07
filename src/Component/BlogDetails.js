import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../Constant/blogData";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Blog Not Found.</h2>
      </div>
    );
  }

  return (
    <section>
      <div className="px-6 py-16 bg-white">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
        />
        <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <div className="text-gray-700 leading-relaxed">{blog.content}</div>
      </div>
    </section>
  );
};

export default BlogDetails;
