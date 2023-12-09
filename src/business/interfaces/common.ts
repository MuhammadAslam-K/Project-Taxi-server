export interface Signup {
    name: string,
    email: string,
    mobile: string,
    password: string,
}

export interface Login {
    email: string,
    password: string
}

export interface message {
    sender: string
    content: string
    timestamp: string
}

export interface chat {
    rideId: string,
    message: {
        sender: string
        content: string
        timestamp: string
    }
}