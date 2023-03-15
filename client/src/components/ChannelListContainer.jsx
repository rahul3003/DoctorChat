import React from 'react'
import Cookies from 'universal-cookie'
import hospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'

import { ChannelList, useChatContext } from 'stream-chat-react'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'><img src={hospitalIcon} alt="Hospital" width={30} /></div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'><img src={LogoutIcon} alt="Hospital" width={30} /></div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Medical Helper</p>
    </div>
)

const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className='channel-list__list__wrapper'>
                <CompanyHeader />
                <ChannelSearch />
            </div>
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {} }
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type='team'
                        />
                    )}
                    Preview={(previewProps) => [
                        <TeamChannelPreview
                        {...previewProps}
                        type='team'
                        />
                    ]}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {} }
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type='messaging'
                        />
                    )}
                    Preview={(previewProps) => [
                        <TeamChannelPreview
                        {...previewProps}
                        type='messaging'
                        />
                    ]}
                />
        </>
    )
}

export default ChannelListContainer