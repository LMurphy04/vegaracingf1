export default function Title({ title }: { title: string }) {
  return (
    <div className="flex mb-5 mt-2 text-xl italic">
      <p>{title}</p>
      <span className="border-[1px] h-1/2 ml-3 my-auto grow border-black" />
    </div>
  );
}
