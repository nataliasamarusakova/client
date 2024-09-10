import { useMutation, useQueryClient } from "@tanstack/react-query";  
import { apiService } from "../api/apiService";
import { IAccount } from "../interface/account";

export function useDeleteAccount() {

    const queryClient = useQueryClient();

    const deleteAccountById = (accounts: IAccount[], id: string) => accounts?.filter((account) => account.id !== id);

    const { mutate: deleteAccount, isPending: isLoadingDeleteAccount } = useMutation({
        mutationKey: ['delete-account'],
        mutationFn: (id: string) => apiService.deleteAccount(id),
        onSuccess: (_data, variables) => {
            queryClient.setQueryData(['get-accounts'], (accounts: IAccount[]) => deleteAccountById(accounts, variables));
        }
    })

    return { deleteAccount, isLoadingDeleteAccount }
}
