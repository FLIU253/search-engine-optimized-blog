import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState, Fragment } from "react";
import { singleBlog } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";
import renderHtml from "react-render-html";

const SingleBlog = ({ blog }) => {
  const showBlogCategories = blog => {
    return blog.categories.map((c, i) => {
      return (
        <Link key={i} href={`/categories/${c.slug}`}>
          <a className="btn btn-primary mr-1 ml-1 mt-3"> {c.name}</a>
        </Link>
      );
    });
  };

  const showBlogTags = blog => {
    return blog.tags.map((t, i) => {
      return (
        <Link key={i} href={`/tags/${t.slug}`}>
          <a className="btn btn-outline-primary mr-1 ml-1 mt-3"> {t.name}</a>
        </Link>
      );
    });
  };

  return (
    <Fragment>
      <Layout>
        <main>
          <article>
            <div className="container-fluid">
              <section>
                <div className="row" style={{ marginTop: "-30px" }}>
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className="img img-fluid featured-image"
                  />
                </div>
              </section>

              <section>
                <p className="lead mt-3 mark">
                  Written by {blog.postedBy.name} | Published{" "}
                  {moment(blog.updatedAt).fromNow()}
                </p>

                <div className="pb-3">
                  {showBlogCategories(blog)}
                  {showBlogTags(blog)}
                  <br />
                  <br />
                </div>
              </section>
            </div>

            <div className="container-fluid">
              <section>
                <div className="col-md-12 lead">{renderHtml(blog.body)}</div>
              </section>
            </div>

            <div className="container pb-5">
              <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
              <hr />
              <p>show related blogs</p>
            </div>

            <div className="container pb-5">
              <p>show comments here</p>
            </div>
          </article>
        </main>
      </Layout>
    </Fragment>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { blog: data };
    }
  });
};

export default SingleBlog;
