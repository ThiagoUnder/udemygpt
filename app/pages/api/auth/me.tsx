import { useUser } from "@auth0/nextjs-auth0/client";

const Me = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Hello, {user?.name}</h1>
    </div>
  );
};

export default Me;
