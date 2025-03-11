import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogData } from "../Constant/blogData";
import BreadcrumbBanner from "../Images/Blog/Blog_Sub_banner.jpg";
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
    <div>
      <div
        className="relative h-40 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BreadcrumbBanner})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Hero content */}
        <div className="relative z-10 text-center text-white">
          <p className="text-sm uppercase tracking-wider mb-2">
            <Link to="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-2">{">"}</span>
            PAGES
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold">Blog</h1>
        </div>
      </div>
      <section>
        <div className="px-6 py-16 bg-white">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
          />
          <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {blog.title}
          </h1>
          <div className="text-gray-700 leading-relaxed">{blog.content}</div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
