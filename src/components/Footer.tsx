import { Blocks } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-[#273d59] mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#273d59] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#c4d8f2]">
            <Blocks className="size-5 text-[#47668e]" />
            <span>Built for developers, by developers</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/support" className="text-[#c4d8f2] hover:text-[#c4d8f2]/80 transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-[#c4d8f2] hover:text-[#c4d8f2]/80 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#c4d8f2] hover:text-[#c4d8f2]/80 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
