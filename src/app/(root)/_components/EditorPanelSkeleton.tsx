import { Terminal } from "lucide-react";

export function EditorPanelSkeleton() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A49]/50 via-transparent to-[#283C63]/50 rounded-xl blur-3xl" />
      <div className="relative bg-[#0F172A]/90 backdrop-blur-md rounded-xl border border-white/[0.1] p-6 h-[600px] shadow-lg shadow-blue-900/40">
        {/* Editor Area Skeleton */}
        <div className="relative rounded-xl overflow-hidden ring-1 ring-white/[0.1]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A49]/10 via-transparent to-[#283C63]/10" />
          <div className="h-[600px] bg-[#1E293B]/50 backdrop-blur-md p-4">
            {/* Code line skeletons */}
            {[...Array(15)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 mb-3 animate-pulse">
                <div className="w-12 h-4 bg-[#334155]/50 rounded" />
                <div
                  className="h-4 bg-[#334155]/50 rounded"
                  style={{ width: `${Math.random() * 60 + 20}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 flex justify-end">
          <div className="w-40 h-6 bg-[#334155]/50 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function OutputPanelSkeleton() {
  return (
    <div className="relative bg-[#0F172A] rounded-xl p-6 ring-1 ring-white/[0.1] shadow-lg shadow-blue-900/40">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1E293B] ring-1 ring-white/[0.1]">
            <Terminal className="w-5 h-5 text-blue-400/70" />
          </div>
          <div className="w-20 h-4 bg-[#334155]/50 rounded animate-pulse" />
        </div>
      </div>

      {/* Output Area Skeleton */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A49] to-[#1E293B] rounded-xl -z-10" />
        <div className="relative bg-[#1E293B]/50 backdrop-blur-md border border-[#334155] rounded-xl p-6 h-[600px]">
          <div className="flex items-center justify-center h-full">
            <div className="text-center animate-pulse">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#334155]/50 rounded-xl" />
              <div className="w-56 h-4 mx-auto bg-[#334155]/50 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading state for the entire editor view
export function EditorViewSkeleton() {
  return (
    <div className="space-y-8 p-6 bg-[#0D1B2A] rounded-xl">
      <EditorPanelSkeleton />
      <OutputPanelSkeleton />
    </div>
  );
}
