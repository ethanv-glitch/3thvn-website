export interface Release {
  id: string
  title: string
  date: string
  cover: string
  type: "single" | "album"
  spotify: string
  tracks?: string[]
}