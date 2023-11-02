import { ButtonLoading } from "@/components/Icons";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export function AddButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className=""
      // disabled={pending}
      // isLoading={pending}
      spinner={ButtonLoading}
      color="primary"
    >
      Add
    </Button>
  );
}

export default AddButton;
