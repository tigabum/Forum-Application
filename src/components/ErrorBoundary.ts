import React from "react";
import "./ErrorBoundary.css";

interface ErrorBoundaryProps {
  children: React.ReactNode[];
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  info: object;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: { componentStack: "" },
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error | null, info: React.ErrorInfo) {
    console.log("error", error);
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) return "somestring";

    return this.props.children;
  }
}

export default ErrorBoundary;
