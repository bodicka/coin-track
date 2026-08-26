import styles from "./ErrorState.module.scss";

interface ErrorStateProps {
    message?: string;
}

const ErrorState = ({ message = "Не удалось загрузить данные" }: ErrorStateProps) => {
    return <div className={styles.errorState}>{message}</div>;
};

export default ErrorState;
