import "./blog.css";

const Blog = () => {
  return (
    <div className="container4">
      <h1>Blog</h1>
      <h2>Recent Posts</h2>
      <section className="blog-section">
        <div className="card">
          <img src="/11.PNG" alt="123" />
          <h3>Customer Feedback</h3>
          <p>What customer think about our restaurant</p>
        </div>
        <div className="card">
          <img src="/22.PNG" alt="123" />
          <h3>Best Cuisine</h3>
          <p>Taste the delicious foods in Asia</p>
        </div>
        <div className="card">
          <img src="/33.PNG" alt="123" />
          <h3>What makes our food delicious</h3>
          <p>Know the secret</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
