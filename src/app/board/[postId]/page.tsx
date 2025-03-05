export default async function BoardPage({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = await params;
  return <div>{postId}</div>;
}
