import { ReactNode } from 'react';
export interface LoginCredentials {
    username: string;
    password: string;
    rememberMe: boolean;
}
export interface LoginProps {
    /**
     * Native form endpoint. When set without `onLogin`, the form posts
     * natively (SPA apps pass `onLogin` instead and the submit is
     * intercepted).
     */
    action?: string;
    method?: string;
    /** SPA submit: called with the credentials; may be async (pending state). */
    onLogin?: (creds: LoginCredentials) => void | Promise<void>;
    onRegister?: () => void;
    onForgotPassword?: () => void;
    registerContent?: ReactNode;
    forgotPasswordContent?: ReactNode;
    /** Show the remember-me checkbox. Defaults to true. */
    rememberMe?: boolean;
    /** External loading state (OR-ed with the internal pending state). */
    loading?: boolean;
    title?: ReactNode;
    usernameLabel?: string;
    passwordLabel?: string;
    submitText?: string;
    /** Username persistence key for remember-me. Null disables. */
    storageKey?: string | null;
    className?: string;
}
export declare function Login({ action, method, onLogin, onRegister, onForgotPassword, registerContent, forgotPasswordContent, rememberMe, loading, title, usernameLabel, passwordLabel, submitText, storageKey, className, }: LoginProps): import("react").JSX.Element;
