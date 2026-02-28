import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  // Вызывается при ошибке в дочерних компонентах
  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  // Метод для сброса ошибки (retry)
  resetError = (): void => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      // Клонируем fallback и передаём resetError
      return (
        <div>
          {this.props.fallback}
          <button
            onClick={this.resetError}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#0066cc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary