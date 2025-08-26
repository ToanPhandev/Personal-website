

type WorkExperience = {
  school: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}



export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    school: 'Đại Học Mở Thành Phố Hồ Chí Minh',
    title: 'Học Ngành Khoa Học Máy Tính',
    start: '2024',
    end: 'Hiện tại',
    link: 'https://ou.edu.vn',
    id: '2451012114',
  },
]

export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/toan-phan-a1515935b/',
  },
]

export const EMAIL = 'toan.pbsg@gmail.com'
