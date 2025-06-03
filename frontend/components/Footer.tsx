export function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} God & Justice. All rights reserved(Xie Wenjie).</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/about">About</a>
          <a href="/programs">Programs</a>
          <a href="/donate">Donate</a>
        </div>
      </div>
    </footer>
  )
}