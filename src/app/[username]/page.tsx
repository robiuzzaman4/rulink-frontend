import UserNamePage from "@/components/pages/username";

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  return <UserNamePage username={username} />;
}
