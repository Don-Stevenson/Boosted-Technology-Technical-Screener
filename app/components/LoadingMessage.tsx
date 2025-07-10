import styles from '../page.module.css'

type LoadingProps = {
  isLoading: boolean
}

export const LoadingMessage = ({ isLoading }: LoadingProps) => {
  return isLoading ? (
    <>
      <div className={styles.loadingSpinner} />
      <div className={styles.loadingState}>Page is loading </div>
    </>
  ) : null
}
