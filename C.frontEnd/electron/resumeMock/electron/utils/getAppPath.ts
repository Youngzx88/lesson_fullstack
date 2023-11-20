// 或者文件的绝对路径
import { ipcRenderer } from 'electron'

export const getAppPath = () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('get-root-path', {})
    ipcRenderer.on('reply-root-path', (event, arg: string) => {
      if (arg) {
        resolve(arg)
      } else {
        reject(new Error('项目路径错误'))
      }
    })
  })
}
