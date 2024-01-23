import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center w-full self-stretch`}
    >
      <div className="cover flex-1 w-full"></div>

      <div className="text px-2 text-center pt-10 text-2xl font-bold">
        Open everyday 08:00~22:00
      </div>
      <div className="text pb-10 px-3 text-center text-lg">
        <a
          href="https://maps.app.goo.gl/AdqWmdNAGGS9PyVH6"
          className="cursor-pointer underline"
        >
          3009 Notre-Dame St W, Montreal, QC H4C 1N9
        </a>
      </div>
    </main>
  );
}
