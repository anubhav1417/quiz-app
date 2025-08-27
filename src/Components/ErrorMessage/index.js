import React from 'react'

const ErrorMessage = () => {
    return (
        <div style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 4,
            backgroundColor: "orangered",
            textAlign: "center",
            color: "white",
            textTransform: "capitalize",
          }}
          >
            Please Fill all the feilds
        </div>
    )
}

export default ErrorMessage
