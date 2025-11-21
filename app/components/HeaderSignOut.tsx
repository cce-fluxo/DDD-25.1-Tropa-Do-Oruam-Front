import Image from "next/image";

export default function HeaderSignOut() {
  return (
    <header className="w-full flex justify-center bg-white py-2 md:py-4 lg:py-4 xl:py-4 shadow-md">
        <Image
        src="/sorrisync.png"
        alt="Logo SorriSync"
        width={200}
        height={50}
        className="w-35 md:w-50 lg:w-50 xl:w-50 h-auto"
        priority
        />
    </header>
  );
}