export default function Title({ title }: { title: string }) {
  return (
    <div className="flex mb-5 pt-2 text-xl italic font-extrabold">
      <span className="border-4 rounded-l-lg bg-vega-blue border-vega-blue h-1/2 mr-3 w-8 my-auto" />
      <p>{title}</p>
      <span className="border-4 rounded-r-lg bg-vega-blue border-vega-blue h-1/2 ml-3 my-auto grow" />
    </div>
  );
}
