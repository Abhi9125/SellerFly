import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../Constant/blogData";
import BreadcrumbBanner from "../Images/Blog/Blog_Sub_banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
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
            BLOG
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold">Blog Details</h1>
        </div>
      </div>

      {/* Blog Content Section */}
      <section className="py-16 px-60 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1
            className="text-4xl font-bold text-gray-800 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {blog.title}
          </h1>

          {/* Date */}
          <p
            className="text-sm text-gray-500 mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {blog.date}
          </p>

          {/* Optional secondary image */}
          {blog.content.image1 && (
            <div className="mb-6" data-aos="fade-up" data-aos-delay="250">
              <img
                src={blog.content.image1}
                alt={`${blog.title} Supplementary`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          )}
          {/* Content Description */}
          <p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {blog.content.description}
          </p>
          {/* Explanation Blocks */}
          {blog.content.explaintion.map((block, idx) => (
            <div key={idx} className="mb-8" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {block.heading}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {block.para}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
