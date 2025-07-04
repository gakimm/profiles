import Image from "next/image"
export default function Loading() {
    return  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
        <Image
        src="/kimmycode-loading.gif"
        alt="Loading Kimmycode"
        width={200}
        height={200}
        priority
        />
    </div>
}