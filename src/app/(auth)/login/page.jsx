import { auth, signIn } from "@/lib/auth";

const LoginPage = async () => {
  const session = await auth();
  console.log(session);
  const hadleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <div>
      <form action={hadleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
