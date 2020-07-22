import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'
//Define higher order component. Return back a new functional component
const WithSpinner = WrappedComponent =>{
    const Spinner = ({isLoading, ...otherProps}) =>{
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}
return Spinner
}

export default WithSpinner