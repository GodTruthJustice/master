import Link from "next/link";
import { articles } from "./data/articles";

export default function ArticlesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">All Articles</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id}>
            <Link
              href={`/articles/${article.id}`}
              className="text-xl text-blue-600 hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
