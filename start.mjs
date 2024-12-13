import { config } from 'dotenv'
import { createServer } from 'http'
import handler from './.output/server/index.mjs'

// .env 파일 로드
config()

// 환경 변수에서 포트 가져오기
const port = process.env.NUXT_PORT || 3000

// Nuxt 서버 생성
const server = createServer(handler)
server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
