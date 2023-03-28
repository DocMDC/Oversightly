import React, {useState} from 'react';
import {HiOutlinePaperAirplane} from "react-icons/hi"
import axios from 'axios';

function ChatInterface() {

    const [userQuestion, setUserQuestion] = useState('')
    const [aiResponse, setAiResponse] = useState('')
    const [conversations, setConversations] = useState([])

    const authToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp6V2V3WGkyaV81WnpVSHpFZWwzRSJ9.eyJpc3MiOiJodHRwczovL2NocnQtcHJvZC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjQxNWQ1NjAxOTYwNzA3OGRkNWE1YzNhIiwiYXVkIjpbImh0dHBzOi8vY2hydC5jb20iLCJodHRwczovL2NocnQtcHJvZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5MTc2NDkwLCJleHAiOjE2NzkyNjI4OTAsImF6cCI6IjhiRExIWWVFVWZQSEg4MVZSREJzQ1RONVRZa2xBTUN1Iiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmpvdXJuYWwgd3JpdGU6am91cm5hbCByZWFkOmRhdGEiLCJwZXJtaXNzaW9ucyI6WyJjaGF0OmxsbSIsInJlYWQ6ZGF0YSIsInJlYWQ6am91cm5hbCIsIndyaXRlOmpvdXJuYWwiXX0.AJo7-sbe7254MP_sdjVDwZ-IB-WSX7lt5WKxKPPOWbxd-FkAfYCscNVQhY5c2j4HMga-OsRCdwFi2wk3Rw4zHsXIQArzKARdEP8CMejFxkEJHng714KvWp3ZEXmUFT6KbOQ3gQdnyCESKoV2ObFEE7zo2d9dkG8FTbYc0r3NSiOpWrCDtjtXPvpWn0DmcvKZOc1ajj7p8kaY5eHVYxNvfogvuXXc87-GtotjboNAGlu_tVkE-e0LSaHfBzVEgsjCoW7w68KqWRDjQf1wpa3wTfMsYczmgdiZWtq1qVsepy8UrPQYmYaykEXSYFkvCOAUO0eU6_cNsqpU1qF-a4b2HQ'

    const endpointUrl = `https://alb.chrt.com/llm/:${userQuestion}`

    const headers = {
        Authorization: `Bearer ${authToken}`
    }

    function updateUserQuestion(e) {
        const {value} = e.target
        setUserQuestion(value)
    }

    function submitUserQuestion(e) {
        e.preventDefault();
      
        axios
          .get(endpointUrl, {
            params: {
              userQuestion,
            },
            headers,
          })
          .then((response) => {
            const aiResponse = response.data.choices[0].message.content;
            setAiResponse(aiResponse);
            setConversations([
              ...conversations,
              { type: "user", userText: userQuestion },
              { type: "bot", botText: aiResponse },
            ]);
          })
          .catch((error) => {
            console.log(error);
          });
      
        setUserQuestion("");
      }

      console.log(aiResponse)
      console.log(conversations)

    return (
        <div className="absolute left-0 top-12 right-0 bottom-0 md:left-[275px] md:top-0">
            {aiResponse ?
            <div className="absolute top-0 left-0 right-0 bottom-32 overflow-y-scroll">
                {conversations.map((conversation, index) => {
                    return (
                        <div key={index}>
                            <div className="min-h-[75px] bg-gray-100 flex justify-center items-center py-4">
                                <div className="w-80 md:w-[400px] lg:w-[700px] flex flex-row">
                                    <div className="w-8 h-8 border border-black p-2 mr-4 mt-2 flex items-center bg-primary text-white justify-center">M</div>
                                    <h1>{conversation.userText}</h1>
                                </div>
                            </div>
                            <div className="min-h-[75px] bg-white flex justify-center items-center py-4 border-t border-b border-gray-300">
                                <div className="w-80 md:w-[400px] lg:w-[700px] flex flex-row">
                                    <div className="w-8 h-8 border border-black p-2 mr-4 mt-2 flex items-center bg-alternative text-white justify-center">AI</div>
                                    <h1>{conversation.botText}</h1>
                                </div>
                            </div> 
                        </div>
                    )
                })}
            </div>
            :
            <>
                <div className="mt-24 text-center">
                    <h1 className="text-3xl font-serif">Oversightly</h1>
                </div>
                <div>
                    <h2 className="text-center mt-4 text-xs text-highlight font-serif">Personalized education for the classroom</h2>
                </div>
                <div className="mt-24">
                    <h2 className="text-center font-serif text-2xl">Ask me <span className="border-b border-primary pb-1">anything</span> and I'll do my best to help you learn</h2>
                </div>
            </>
            }

            
            <div className="absolute bottom-0 left-0 w-full h-32 flex bg-gray-700 items-center justify-center px-8">
                <form 
                    onSubmit={submitUserQuestion}
                    className="w-full flex items-center justify-center"
                >
                    <input 
                        type="text"
                        value={userQuestion}
                        onChange={updateUserQuestion}
                        className="bg-white shadow-xl mx-4 w-full max-w-[700px] border border-gray-300 rounded-md h-14 px-4 py-2 font-serif resize-none focus:outline-none"
                    />
                    <HiOutlinePaperAirplane 
                        onClick={submitUserQuestion}
                        className="text-3xl text-gray-400 hover:text-primary cursor-pointer"
                    />
                </form>
                
            </div>
        </div>
    );
}

export default ChatInterface;


//https://alb.chrt.com/llm/:prompt

