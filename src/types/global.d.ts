interface IProject {
  type: string
  year: string
  title: string
  subtitle: string
  image: string
  github?: string
  description: string[]
  process?: {
    image: string
    desc: string
  }[]
}
