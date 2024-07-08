export default function Title({ title }: { title: string }) {
  return (
    <div className="flex my-5 text-xl italic">
      <p>{title}</p>
      <span className="border-[1px] h-1/2 ml-3 my-auto grow border-black"></span>
    </div>
  );
}
