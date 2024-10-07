import { defineStore } from 'pinia'
import { marked } from 'marked'

let msgCount = 0
let index = 0
let totalMsg = ''

export const userMsgStore = defineStore('userMsgStore', {
  // 持久化
  persist: true,
  state: () => {
    return {
      list: [],
    }
  },
  actions: {
    userAddMsg(msg) {
      this.list.push({
        role: 'user',
        content: marked(msg),
        status: 2,
      })
      totalMsg = ""
    },
    aiAddMsg(content, status) {
      if (status === 0) {
        totalMsg = content
      } else {
        totalMsg += content
      }
      msgCount = totalMsg.length

      let runMsg = this.list.find((i) => i.status !== 2)
      if (!runMsg) {
        this.list.push({
          role: 'assistant',
          content: content,
          status: status,
        })
        index = 0
      } else {
        let interval = setInterval(() => {
          if (index < msgCount) {
            runMsg.content += totalMsg[index]
            index++
          } else {
            // 所有字符都已显示
            clearInterval(interval)
            if (status === 2) {
              runMsg.status = 2
              alert('回答完成')
            }
          }
        }, 30)
      }
    },
  },
})
