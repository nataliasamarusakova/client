import { ITaskSettings } from "./task.settings";

export interface IAccount {
    id: string
    domain: string
    name: string
    image: string
    is_work: boolean
    is_blocked: boolean
    settings: ITaskSettings
    statistics: {
        id: number
        successInviteFriends: number
        errorSendPeopleLs: number
        errorInviteFriends: number
        errorLikePeople: number
        successLikePeople: number,
        successSendPeopleLs: number,
    }
    sleep: Date
    access_token: string
    user_agent: string
    proxy: string
}