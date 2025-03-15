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

  // Filter out the current blog to display others
  const otherBlogs = blogData.filter((item) => item.id !== blog.id);

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
      <section className="py-16 px-6 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
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
          {Array.isArray(blog.content.explaintion) &&
            blog.content.explaintion.map((block, idx) => (
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

      {/* More Blogs Section */}
      {otherBlogs.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold text-center text-[#ab5836] mb-8"
              data-aos="fade-up"
            >
              More Blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherBlogs.slice(0, 3).map((item) => (
                <Link key={item.id} to={`/blog/${item.id}`}>
                  <div
                    className="bg-white h-[26rem] rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
                    data-aos="fade-up"
                  >
                    <div className="h-48 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 flex-grow">
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetails;
