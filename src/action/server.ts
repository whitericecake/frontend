"use server";
import { addTest, deleteTest } from "@/lib";

export const actionTest = async (e: FormData) => {
  const test = {
    title: "test",
    content: e.get("name") as string,
  };
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  await addTest(test);
};

export const actionDelClick = async (id: number, e: FormData) => {
  await deleteTest({ id });
};
