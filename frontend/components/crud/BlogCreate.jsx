import Link from "next/link";
import { useState, useEffect } from "react";
import Router, { withRouter } from "next/router";
import dynamic from "next/dynamic";
import { getCookie, isAuth } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { createBlog } from "../../actions/blog";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";

const CreateBlog = ({ router }) => {
  return (
    <div>
      <h2>Create blog form</h2>
      {JSON.stringify(router)}
    </div>
  );
};
export default withRouter(CreateBlog);
