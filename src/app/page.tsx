import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world: <br />
      <Link href="/recursive">link to the folder recursive react component</Link>
    </main>
  );
}
