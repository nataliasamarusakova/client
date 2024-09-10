import { useQuery } from "@tanstack/react-query";
import { apiService } from "../api/apiService";

export function useUserProfile() {

    const { data: user, isLoading: isLoadingUser } = useQuery({
        queryKey: ['user-profile'],
        queryFn: () => apiService.getInfoUser()
    });

    return { user, isLoadingUser };
}
