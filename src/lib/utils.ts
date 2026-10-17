export { cn } from "cn"

export type BooleanKeys<T> = keyof {
  [P in keyof T as T[P] extends boolean ? P : never]: T[P]
}
