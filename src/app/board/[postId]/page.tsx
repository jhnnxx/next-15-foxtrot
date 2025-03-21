import BoardList from '@/components/board/BoardList'

export default async function BoardPage({
  params,
}: {
  params: Promise<{
    postId: string
  }>
}) {
  const { postId } = await params
  console.log('postId:', postId)
  return <BoardList postId={postId} />
}
