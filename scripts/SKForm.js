
function isMessagesPage() {
    return document.title === "Messages Sent Page";


}document.addEventListener('DOMContentLoaded', ()=> {
    const reviewDisplay = document.querySelector(".message-Total");

    const getMessages = ()=> {
        let messages = localStorage.getItem('Messages');
        return messages ? JSON.parse(messages) : 0; // Return 0 if no messagess are found
    }

    let numMessages = getMessages();

    const setMessages = () => {
        localStorage.setItem('Messages', JSON.stringify(numMessages));
    }

    const displayMessages = (messages) =>{
        reviewDisplay.textContent = messages;
    }

    if (isMessagesPage()) {
        numMessages++;
        displayMessages(numMessages);
        setMessages();
    }
    
});