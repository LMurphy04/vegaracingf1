export default function Title({ title }: { title: string }) {
  return (
    <div className="flex mb-5 mt-2 text-xl italic font-extrabold">
      <span className="border-4 rounded-l-lg border-vega-blue h-1/2 mr-3 w-8 my-auto border-black" />
      <p>{title}</p>
      <span className="border-4 rounded-r-lg border-vega-blue h-1/2 ml-3 my-auto grow border-black" />
    </div>
  );
}
