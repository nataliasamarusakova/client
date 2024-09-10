import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from "react";
import { apiService } from '../api/apiService';
import { IAccount } from '../interface/account';

export function useGetAccounts() {

    const { data, isLoading: isLoadingAccounts } = useQuery({
        queryKey: ['get-accounts'],
        queryFn: async () => apiService.getAccounts()
    })

    const [accounts, setAccounts] = useState<IAccount[]>([]);

    useEffect(() => {
        if (data) {
            setAccounts(data);
        }
    }, [data]);

    return { accounts, isLoadingAccounts };
}