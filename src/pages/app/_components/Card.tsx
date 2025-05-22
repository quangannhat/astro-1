export default function Card({
  content,
  title,
}: {
  content: any;
  title: string;
}) {
  return (
    <div className="border-zinc-300n rounded-md border p-10">
      <h2>{title}</h2>
      {content}
    </div>
  );
}
