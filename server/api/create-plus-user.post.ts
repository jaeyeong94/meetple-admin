export default defineEventHandler(async (event) => {
  const body = await readBody(event) // POST 요청에서 전달된 데이터를 읽음

  console.log(body);

  // 데이터 유효성 검사
  if (!body.title || !body.content) {
    throw createError({
      statusCode: 400,
      statusMessage: 'adasd',
    })
  }

  // 예: 데이터베이스에 저장 (실제 프로젝트에서는 데이터베이스 연동)
  const newPost = {
    id: Date.now(),
    title: body.title,
    content: body.content,
  }

  return {
    message: '게시물이 생성되었습니다.',
    post: newPost,
  }
})
