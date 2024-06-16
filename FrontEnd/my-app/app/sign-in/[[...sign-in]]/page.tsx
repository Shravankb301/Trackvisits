import { SignIn } from "@clerk/nextjs";

export default function Page() {
  // return <SignIn routing="path" path="/sign-in" />;

  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
}

