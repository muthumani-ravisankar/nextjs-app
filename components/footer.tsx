export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Apex Motors. All rights reserved.</p>

        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.87v-7H8v-3h2.5V9.5c0-2.5 1.5-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.75l-.44 3h-2.31v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.67 3c-2.63 0-4.52 2.24-3.95 4.77A12.94 12.94 0 013 4s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.94 6.5a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88zM5.75 8h2.5v9.5h-2.5V8zM10 8h2.4v1.28h.03c.33-.63 1.13-1.28 2.32-1.28 2.48 0 2.94 1.63 2.94 3.74V17.5h-2.5v-4.33c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27V17.5H10V8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
