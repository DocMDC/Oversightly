import React from 'react';
import SideNav from "../components/SideNav"
import ChatInterface from "../components/ChatInterface"

function Dashboard() {
    return (
        <div>
            <ChatInterface/>
            <SideNav/>
        </div>
    );
}

export default Dashboard;