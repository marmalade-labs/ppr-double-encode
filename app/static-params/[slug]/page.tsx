export function generateStaticParams() {
  return [{ slug: "hello word" }, { slug: "hello%20world%20encoded" }]
}

export default async function Slug2Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  console.log({ path: "static-params", slug });
  return (
    <p>{slug}</p>
  )
}
