import React, { Fragment } from 'react'

const Alert = ({status, message, show}) => {
    return (
        <Fragment>
            {show ? <div class={status === 'error' ? 'alert alert-danger mb-4'
                : status === 'success' ? 'alert alert-info mb-4' : ''}>
                {status === 'error' ? <i class="fad fa-exclamation-square pr-2"></i>
                : status === 'success' ? <i className="fa fa-check-double pr-2"></i> : ''}
                <small>{message}</small>
            </div>:''}
        </Fragment>
    )
}

export default Alert
