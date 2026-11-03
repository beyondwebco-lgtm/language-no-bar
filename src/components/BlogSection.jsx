import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogSection({ onSelectPost }) {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Knowledge Hub</span>
          <h2 className="section-title">
            Latest Insights & <span>Articles</span>
          </h2>
          <p className="section-subtitle">
            Expert perspectives on language localization, pharmaceutical compliance, AI versus human translators, and regional market expansion.
          </p>
        </div>

        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="blog-category-badge">{post.category}</span>
              </div>

              <div className="blog-content">
                <div className="blog-meta-row">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>

                <div style={{ marginTop: 'auto' }}>
                  <button
                    type="button"
                    className="blog-read-more-link"
                    onClick={() => onSelectPost && onSelectPost(post)}
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

