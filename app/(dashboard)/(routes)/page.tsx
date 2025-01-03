import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-3xl  text-sky-700">
      <UserButton afterSignOutUrl="" />

      <div className="text-black">Hello</div>
    </div>
  );
}
