export default async function SlugPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  console.log({ slug });
  return (
    <p>{slug}</p>
  )
}
