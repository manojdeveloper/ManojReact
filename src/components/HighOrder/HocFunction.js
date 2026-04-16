export let HocFunction = (InputComponent) => {
    let EnhancedComponent = ({ isLoading, ...props }) => {
        if (isLoading) {
            return <h2>Loading...</h2>;
        }

        return <InputComponent {...props} />;

    }

    return (props) => <EnhancedComponent {...props} />;
}