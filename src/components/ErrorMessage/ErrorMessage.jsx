import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const ErrorMessage = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default ErrorMessage;
