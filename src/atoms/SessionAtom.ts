import { LocalStorageKeys } from "./../constants/localstorage"
import { atom } from "jotai"

interface Session {
  avatarUrl: string
  username: string
  name: string
}

export const SessionAtom = atom<Session>((get) => {
  const avatarUrl =
    localStorage.getItem(LocalStorageKeys.avatarUrl) ??
    "https://ui-avatars.com/api/?name=felipe+henrique"
  const username =
    localStorage.getItem(LocalStorageKeys.username) ?? "felipehfs"
  const name =
    localStorage.getItem(LocalStorageKeys.username) ?? "Felipe Henrique"

  return {
    avatarUrl,
    username,
    name,
  }
})
