import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import { IAccount } from "../interface/account";
import { apiService } from "../api/apiService";

export function useActionAccount() {

    const queryClient = useQueryClient();

    const actionAccountById = (accounts: IAccount[], id: string) => accounts?.map((account) => (account.id === id ? { ...account, is_work: !account.is_work } : account));

    const { mutate: actionAccount, isPending: isLoadingActionAccount } = useMutation({
        mutationKey: ['action-account'],
        mutationFn: (id: string) => apiService.actionAccount(id),
        onSuccess: (_data, variables) => {
            queryClient.setQueryData(['get-accounts'], (accounts: IAccount[]) => actionAccountById(accounts, variables));
        }
    })

    return { actionAccount, isLoadingActionAccount }
}