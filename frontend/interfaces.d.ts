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

export interface pgState {
    text: string,
    enableBasicAutocompletion: boolean,
    enableLiveAutocompletion: boolean,
    enableSnippets: boolean
}