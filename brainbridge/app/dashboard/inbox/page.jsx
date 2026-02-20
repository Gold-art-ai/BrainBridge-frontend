import { Suspense } from "react";
import InboxClient from "./InBoxClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading inbox…</div>}>
      <InboxClient />
    </Suspense>
  );
}