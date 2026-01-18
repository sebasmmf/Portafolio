const socialMedias = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sebastian-martinez-194862235/',
        image_src: './linkedIn.svg',
        image_alt: 'linkedIn icon'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/sebasmmf',
        image_src: './github.svg',
        image_alt: 'github icon'
    }
]

const menuOptions = ['home', 'skills', 'projects', 'about', 'contact']

const skills = [
    {
        name: 'HTML5',
        image_src: './html5.svg',
        image_alt: 'html5 icon',
        description: 'Web pages layout using semantic tags.',
    },
    {
        name: 'CSS3',
        image_src: './css3.svg',
        image_alt: 'css3 icon',
        description: 'Creation of responsive web pages, Animations, and UX/UI designs.',
    },
    {
        name: 'SASS',
        image_src: './sass.svg',
        image_alt: 'sass icon',
        description: 'Creation of user interfaces using Variables, Functions, Mixins...',
    },
    {
        name: 'Tailwind',
        image_src: './tailwind.svg',
        image_alt: 'tailwind icon',
        description: 'Styling web pages using this powerful and agile CSS framework.',
    },
    {
        name: 'JavaScript',
        image_src: './javascript.svg',
        image_alt: 'javascript icon',
        description: 'Creation of interactive websites, Fetching, DOM manipulation, LocalStorage, Promises...',
    },
    {
        name: 'React',
        image_src: './react.svg',
        image_alt: 'react icon',
        description: 'Use of States, React Hooks, Routing, Components, Zustand, React Query, Next.js and more.',
    }
]

const projects = [
    {
        name: 'Projecto 1',
        description: 'descripcion del proyecto como ejemplo',
        image_src: '',
        image_alt: '',
        url: '',
        technoligies: ['React', 'Node.js', 'TypeScript']
    },
    {
        name: 'Projecto 2',
        description: 'descripcion del proyecto como ejemplo',
        image_src: '',
        image_alt: '',
        url: '',
        technoligies: ['React', 'Node.js', 'TypeScript']
    },
    {
        name: 'Projecto 3',
        description: 'descripcion del proyecto como ejemplo',
        image_src: '',
        image_alt: '',
        url: '',
        technoligies: ['React', 'Node.js', 'TypeScript']
    }
]

export {
    socialMedias,
    menuOptions,
    skills,
    projects
}