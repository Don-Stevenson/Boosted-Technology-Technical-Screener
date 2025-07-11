import React from 'react'

type ErrorMessageProps = {
  isError: boolean
}

function ErrorMessage({ isError }: ErrorMessageProps) {
  return isError ? (
    <>
      <div>error loading data</div>
    </>
  ) : null
}

export default ErrorMessage
