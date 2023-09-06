import UserAvatar from "./icons/user-avatar";

type UserDataProps = {
  userName: string;
  userEmail: string;
};

export default function User({ userName, userEmail }: UserDataProps) {
  return (
    <div>
      <div className="w-full h-16 p-3 bg-neutral-50 rounded-xl justify-start items-center gap-2.5 inline-flex">
        <div className="w-8 h-8 relative">
          <UserAvatar />
        </div>
        <div className="flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-foreground text-base font-semibold">
            {userName}
          </div>
          <div className="w-36 text-neutral-400 text-xs font-normal">
            {userEmail}
          </div>
        </div>
      </div>
    </div>
  );
}
