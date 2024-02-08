"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";
import { useDeleteBoardModal } from "@/hooks/use-delete-board-modal";
import { deleteBoard } from "@/actions/delete-board";

export const DeleteModal = () => {
    const id = useDeleteBoardModal((state) => state.id) as string;
    const isOpen = useDeleteBoardModal((state) => state.isOpen);
    const onClose = useDeleteBoardModal((state) => state.onClose);

    const { execute, isLoading } = useAction(deleteBoard, {
        onError: (error) => {
            toast.error(error);
        }
    });

    let closed = false;

    const onClick = () => {
        onClose();
        execute({ id });
    };
    
    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}
        >
            <DialogContent className="max-w-md p-0 overflow-hidden">
                <div className="text-neutral-700 mx-auto p-7">
                    <h2 className="font-semibold text-xl">
                        You really want to <b className="text-red-500">delete</b> this board?
                    </h2>
                    <p className="pt-3 text-xs font-semibold text-neutral-600 pb-5">
                        Once the board has been deleted, it will be impossible to get the data back. <b>Are you really sure?</b>
                    </p>
                    <Button
                        onClick={onClick}
                        disabled={isLoading}
                        className="w-full bg-red-500 hover:bg-red-400"
                        variant="primary"
                    >
                        I am really sure
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};