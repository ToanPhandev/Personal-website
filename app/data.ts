

type SelectedPost = {
  title: string
  description: string
//  link: string
  id: string,
//  image?: string
}

type WorkExperience = {
  school: string
  title: string
  start: string
  end: string
  link: string
  id: string,
  image?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  id: string,
  image?: string
}

type SocialLink = {
  label: string
  link: string
}

export const SELECTED_POST: SelectedPost[] = [
  {
    title: 'Personal Website',
    description: 'Website thông tin cá nhân',
    //link: 'personal-website-five-mu-83.vercel.app',
    id: 'selected-post-1',
   // image: '/ou-logo.png',
  },
  // Bạn có thể thêm các dự án hoặc bài viết nổi bật khác ở đây
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    school: 'Đại Học Mở Thành Phố Hồ Chí Minh',
    title: 'Sinh viên ngành Khoa học Máy tính',
    start: '2024',
    end: 'Hiện tại',
    link: 'https://ou.edu.vn',
    id: '2451012114',
    image: '/ou-logo.png', // Thêm logo trường hoặc ảnh đại diện
  },
]

export const BLOG_POSTS: BlogPost[] = [


  {
    title: 'Web Trường',
    description: 'Website chính thức Trường Đại Học Mở TP.HCM',
    link: 'https://ou.edu.vn/',
    id: 'blog-post-1',
  },

  {
    title: 'Web Khoa',
    description: 'Website Khoa Công Nghệ Thông Tin Đại Học Mở TP.HCM',
    link: 'http://it.ou.edu.vn/',
    id: 'blog-post-2',
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
