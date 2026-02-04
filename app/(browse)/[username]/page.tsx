import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

async function UserPage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const user = await getUserByUsername(username);
  if (!user) throw notFound();

  const isFollowing = await isFollowingUser(user.id);
  console.log("IS FOLLOWING: ", isFollowing);

  return (
    <div className="flex flex-col gap-y-4">
      <p>username: {user.username}</p>
      <p>user ID: {user.id}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
}

export default UserPage;
