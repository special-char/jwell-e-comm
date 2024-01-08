"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor',
      imageUrl: '/images/blogimage1.webp',
      shortContent: 'The most popular color is yellow which is made by adding silver and some copper. The metals are melted together to form an alloy of the desired color and karat.',
      fullContent: 'The weight of evidence strongly supports a theme of healthful eating while allowing for variations on that theme. A diet of minimally processed foods close to nature, predominantly plants, is decisively associated with health promotion and disease prevention and is consistent with the salient components of seemingly distinct dietary approaches. Efforts to improve public health through diet are forestalled not for want of knowledge about the optimal feeding of Homo sapiens but for distractions associated with exaggerated claims, and our failure to convert what we reliably know into what we routinely do.',
    },
    {
      id: 2,
      title: 'Lorem Ipsum Dolor',
      imageUrl: '/images/blogimage2.webp',
      shortContent: 'Short content of the blog post goes here...',
      fullContent: 'The weight of evidence strongly supports a theme of healthful eating while allowing for variations on that theme. A diet of minimally processed foods close to nature, predominantly plants, is decisively associated with health promotion and disease prevention and is consistent with the salient components of seemingly distinct dietary approaches. Efforts to improve public health through diet are forestalled not for want of knowledge about the optimal feeding of Homo sapiens but for distractions associated with exaggerated claims, and our failure to convert what we reliably know into what we routinely do.',
    },
    {
      id: 3,
      title: 'Lorem Ipsum Dolor',
      imageUrl: '/images/blogimage3.webp',
      shortContent: 'Short content of the blog post goes here...',
      fullContent: 'FThe weight of evidence strongly supports a theme of healthful eating while allowing for variations on that theme. A diet of minimally processed foods close to nature, predominantly plants, is decisively associated with health promotion and disease prevention and is consistent with the salient components of seemingly distinct dietary approaches. Efforts to improve public health through diet are forestalled not for want of knowledge about the optimal feeding of Homo sapiens but for distractions associated with exaggerated claims, and our failure to convert what we reliably know into what we routinely do.',
    },
  ];

  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleContent = (postId) => {
    setExpandedPosts((prevExpandedPosts) => ({
      ...prevExpandedPosts,
      [postId]: !prevExpandedPosts[postId],
    }));
  };

  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-md:max-w-lg mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Blog Page</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={post.imageUrl}
                alt={`Blog Post ${post.id}`}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                {expandedPosts[post.id] ? (
                  <p className="text-sm opacity-75 mb-4">{post.fullContent}</p>
                ) : (
                  <p className="text-sm opacity-75 mb-4">{post.shortContent}</p>
                )}
                <button
                  onClick={() => toggleContent(post.id)}
                  className="inline-block text-blue-200 text-sm hover:underline focus:outline-none"
                >
                  {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
