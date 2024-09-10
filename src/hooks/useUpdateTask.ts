import { useMutation, useQueryClient } from "@tanstack/react-query";  
import { apiService } from "../api/apiService";
import { IAccount } from "../interface/account";

export interface IUseAddTask {
    id: string,
    body: string
}

export function useUpdateTask() {

    const queryClient = useQueryClient();

    const { mutate: addTask, isPending: isLoadingAddTask } = useMutation({
        mutationKey: ['add-task'],
        mutationFn: ({ id, body }: IUseAddTask) => apiService.updateTaskAccount(id, body),
        onSuccess: (data, variables) => {
            queryClient.setQueryData(['get-accounts'], (accounts: IAccount[]) => accounts.map((account) => account.id == variables.id ? { ...account, settings: { ...data } } : account));
        }
    })

    return { addTask, isLoadingAddTask }
}
