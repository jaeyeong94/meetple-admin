// import { closeDatabaseConnection } from '~/server/lib/pg'

export default defineNitroPlugin((nitroApp) => {
  // console.log('PostgreSQL 연결이 초기화되었습니다.')
  //
  // // 서버 종료 시 연결 닫기
  // nitroApp.hooks.hook('close', async () => {
  //   console.log('PostgreSQL 연결 종료 중...')
  //   await closeDatabaseConnection()
  //   console.log('PostgreSQL 연결이 종료되었습니다.')
  // })
})
