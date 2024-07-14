interface Book {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
  github?: string,
  tech1?: string,
  tech2?: string,
  tech3?: string,
  tech4?: string,
}

const booksData: Book[] = [
  {
    title: 'Play Nice But Win',
    description: 'A memoir about Michael Dell',
    imgSrc: '/static/images/books/play-nice-but-win.jpg',
    href: '/blog/books/play-nice-but-win',
    tech1: 'entrepreneur',
    tech2: 'founding',
    tech3: 'startup',
    tech4: 'books',
  },
  {
    title: 'Hello, books!',
    description: "Shouryan Nikam",
    imgSrc: '/static/images/books/hello-books.jpg',
    href: '/blog/books/hello-books',
    tech1: 'about',
    tech2: 'books',
  },
]

export default booksData
