import { ElectronAPI } from '@electron-toolkit/preload'
import type { User } from '../models/user'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getUsers: () => Promise<User[]>
    }
  }
}
