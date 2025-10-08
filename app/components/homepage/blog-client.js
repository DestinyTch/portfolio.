// blog-client.js
"use client";
import Blog from "./blog";

export default function BlogClient({ blogs }) {
  return <Blog blogs={blogs} />;
}
