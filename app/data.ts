

type SelectedPost = {
  title: string
  description: string
  link: string
  id: string
}

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

/*
export const SELECTED_POST: SelectePost[] = [

  {

  }
]
*/

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

export const BLOG_POSTS: BlogPost[] = [


  {
    title: 'Web Trường',
    description: 'Website chính thức Trường Đại Học Mở TP.HCM',
    link: 'https://ou.edu.vn/',
    uid: '1',
  },

  {
    title: 'Web Khoa',
    description: 'Website Khoa Công Nghệ Thông Tin Đại Học Mở TP.HCM',
    link: 'http://it.ou.edu.vn/',
    uid: '2',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/toan-phan-a1515935b/',
  },
  {

    label: 'GitHub',
    link: 'https://github.com/ToanPhandev',
  },

]

export const EMAIL = 'toan.pbsg@gmail.com'
