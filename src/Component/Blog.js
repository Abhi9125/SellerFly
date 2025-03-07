import React, { useEffect } from "react";
import { blogData } from "../Constant/blogData";
import { Link } from "react-router-dom";
import BreadcrumbBanner from "../Images/Blog/Blog_Sub_banner.jpg";
import { AOS } from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true });
  // });
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                  <img src={blog.image} alt={blog.title} />
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700">{blog.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
