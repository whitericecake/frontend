"use server";
import { TestInterface } from "@/components/create/ChatComponents";
import { addTest, deleteTest } from "@/lib";
import { revalidatePath, revalidateTag } from "next/cache";

export const actionTest = async (e: FormData) => {
  const test = {
    title: "test",
    content: e.get("name") as string,
  };
  await addTest(test);
};

export const actionDelClick = async (id: number, e: FormData) => {
  await deleteTest({ id });
};
