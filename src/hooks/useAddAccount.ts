import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "../api/apiService";
import { IAccount } from "../interface/account";

export interface IAddAccount {
    proxy: string;
    access_token: string;
    user_agent?: string;
}

export function useAddAccount() {
    const queryClient = useQueryClient();

    const addNewAccount = (accounts: IAccount[], account: IAccount) => [...accounts, account];

    const { mutate: addAccount, error: authError, isSuccess: authSuccess, isPending: isLoadingAddAccount, } = useMutation({
        mutationKey: ['add-account'],
        mutationFn: ({ access_token, proxy, user_agent }: IAddAccount) => apiService.addAccount(access_token, proxy, user_agent),
        onSuccess: (account) => {
            queryClient.setQueryData(['get-accounts'], (accounts: IAccount[]) => addNewAccount(accounts, account));
        }
    });

    return { addAccount, authError, authSuccess, isLoadingAddAccount };
}