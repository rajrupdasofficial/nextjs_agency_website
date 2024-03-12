import { auth, signIn } from "@/lib/auth";

const LoginPage = async () => {
  const session = await auth();
  const hadleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <div>
      <form action={hadleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
