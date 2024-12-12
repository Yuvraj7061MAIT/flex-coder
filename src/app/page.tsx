import { SignOutButton, SignUpButton } from "@clerk/nextjs";


const Home = () => {
  return <div>
    home page
    <SignUpButton />

    <SignOutButton></SignOutButton>
  </div>;
};

export default Home;
