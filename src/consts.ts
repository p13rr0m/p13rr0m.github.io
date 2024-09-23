export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'p13rr0m',
  DESCRIPTION:
    'This is my website. Work in progress. I am blogging about Google Cloud and artificial intelligence.',
  EMAIL: '',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://p13rr0m.github.io/blog',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/p13rr0m', label: 'GitHub' },
  { href: 'https://stackoverflow.com/users/7482962/p13rr0m', label: 'StackOverflow' },
  { href: 'https://www.linkedin.com/in/robin-meyer-08205320b/', label: 'LinkedIn' },
  // { href: 'https://twitter.com/enscry', label: 'Twitter' },
]
