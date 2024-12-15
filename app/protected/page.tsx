import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { UserResponse } from "@supabase/supabase-js";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const response: UserResponse = await supabase.auth.getUser();
  const { user } = response.data;

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
