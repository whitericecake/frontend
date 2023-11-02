import { revalidateTag } from "next/cache";

const testURL = process.env.NEXT_TEST_SERVER;

export const addTest = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const data = { title, content };

  const post = await fetch(`${testURL}/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (post.status === 200 || post.status === 201) {
    revalidateTag("chat");
  }

  return post;
};

export const deleteTest = async ({ id }: { id: number }) => {
  const deleteData = await fetch(`${testURL}/post/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["del"] },
  });

  if (deleteData.status === 200 || deleteData.status === 201) {
    revalidateTag("chat");
  }

  return deleteData;
};
