import { FaCircleCheck } from "react-icons/fa6";

interface MessageType {
  messages: string;
}
export const SuccessMessage: React.FC<MessageType> = ({ messages }) => {
  if (!messages) return null;

  return (
    <>
      <div className="bg-emerald-500/20 px-3 py-2 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
        <FaCircleCheck className="h-4 w-4" />
        <p>{messages}</p>
      </div>
    </>
  );
};
