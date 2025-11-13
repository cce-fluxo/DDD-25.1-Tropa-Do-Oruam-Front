import Image from "next/image";

export default function HeaderSignOut() {
  return (
    <header className="w-full flex justify-center bg-white py-4 shadow-md">
        <Image
        src="/sorrisync.png"
        alt="Logo SorriSync"
        width={200}
        height={50}
        priority
        />
    </header>
  );
}