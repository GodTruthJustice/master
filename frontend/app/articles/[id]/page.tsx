import { articles } from "../data/articles";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((article) => ({ id: article.id }));
}

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === params.id);
  if (!article) return notFound();

  return (
    // <main className="prose lg:prose-xl max-w-3xl mx-auto p-8 bg-white shadow">
      <main
        className="prose lg:prose-xl max-w-3xl mx-auto p-8 rounded-xl shadow text-gray-900"
        style={{ backgroundColor: '#e3f3e1' }}
      >
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </main>

  // <main className="max-w-6xl mx-auto px-4 py-10"
  //   style={{ backgroundColor: '#cee4ce' }}>
  //   <h1 className="text-3xl font-bold mb-6 text-center">{article.title}</h1>
  //   <div className="flex justify-center">
  //     <div className="w-full md:w-[1000px] max-w-full">
  //       <div dangerouslySetInnerHTML={{ __html: article.html }} />
  //     </div>
  //   </div>
  // </main>
  );
}
