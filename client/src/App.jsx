import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelContainer, ChannelListContainer } from './components'
import './App.css'

const apiKey = 'c2sem2j9c7qq'
const client = StreamChat.getInstance(apiKey)

const authToken = false;

const App = () => {

    if (!authToken) return <auth />

    return (
        <div className='app__wrapper'>
            <Chat client={client} theme='team light'>
                <ChannelListContainer
                />
                <ChannelContainer
                />
            </Chat>
        </div>
    )
}

export default App