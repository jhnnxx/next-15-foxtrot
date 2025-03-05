export default async function BoardPage({
  params,
}: {
  params: Promise<{
    postId: string
  }>
}) {
  const { postId } = await params
  console.log('postId:', postId)
  return <div>{postId}</div>
}
