export interface AppInfo {
    title: string
}

export interface UserStatus {
    loggedin: boolean,
    username?: string,
    token?: string
}

export interface NavBarProps {
    status: UserStatus,
    info: AppInfo
}