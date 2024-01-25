"use server";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { CreateBoard } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "You must be logged in to create a board.",
    };
  }
  const { title, image } = data;

  const [
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHTML,
    imageUserName
  ] = image.split("|")

  if(!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHTML || !imageUserName) {
    return {
      error: "An unexpected error occurred. Please try again.",
    };
  }

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUserName,
      },
    });
  } catch (error) {
    return {
      error: "An unexpected error occurred. Please try again.",
    };
  }

  revalidatePath(`/boards/${board.id}`);
  return {
    data: board,
  };
}

export const createBoard = createSafeAction(CreateBoard, handler);