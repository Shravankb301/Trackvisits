import { SignIn } from "@clerk/nextjs";

export default function Page() {
  // return <SignIn routing="path" path="/sign-in" />;

  return (
    <div className="flex justify-center py-24 bg-base-200">
      <SignIn />
    </div>
  );
}

