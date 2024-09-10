import { useEffect, useState } from 'react';
import { socketApi } from '../api/socketApi';
import { apiService } from '../api/apiService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export interface ILogs {
    logs: {
        id: number
        text: string
        is_success: boolean
        createdAt: Date
        account: {
            id: string
            name: string
        }
    }[],
    total: number
}

export function useLogs() {

    const queryClient = useQueryClient();
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        socketApi.createConnection();
        socketApi.socket.on('logs', (log) => {
            const data: any = queryClient.getQueryData(['get-log-page', currentPage]);
            queryClient.setQueryData(['get-log-page', currentPage], data ? { logs: [...data.logs, log], total: data.total } : { logs: [log], total: 0 });
        })
        return () => socketApi.disconnectSocket();
    }, [])

    const handlePageChange = (page: number) => {
        if (page <= 0 || currentPage == page) {
            return
        }
        setCurrentPage(page);
    };

    const { data, isLoading, error, } = useQuery({
        queryKey: ['get-log-page', currentPage],
        queryFn: async () => {
            const data = await apiService.getLogsPage(currentPage)
            const logs = currentPage == 0 ? data.logs.reverse() : data.logs;
            return { logs, total: Math.ceil(data.total / 20) }
        }
    })

    const { mutate: clearLogs } = useMutation({
        mutationKey: ['clear-log'],
        mutationFn: () => apiService.clearLogs(),
        onSuccess: () => queryClient.setQueryData(['get-log-page', currentPage], { logs: [], total: 0 })
    })

    return { data, isLoading, error, currentPage, clearLogs, handlePageChange };
};
