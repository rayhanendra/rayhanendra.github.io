interface IProject {
  id: string
  type: string
  year: string
  title: string
  subtitle: string
  image: string
  madeAt: string
  buildWith: string[]
  link: string
  github: string
  descriptions: string[]
  process: {
    image: string
    desc: string
  }[]
}
