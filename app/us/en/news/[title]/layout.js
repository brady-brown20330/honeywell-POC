import { Inter } from "next/font/google";
import "../../../../../app/article.css";

const inter = Inter({ subsets: ["latin"] });

export default function ArticleLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
