import { useState } from 'react';

export const useChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
        {sender: 'bot', text: 'Hi! How can I help you today?'},
    ]);

    const toggleChat = () => setIsOpen(prev => !prev);

    const generateRandomResponse = (): string => {
        const responses = [
            'I\'m here to assist you with anything!',
            'Can you please clarify your request?',
            'That\'s an interesting question!',
            'Let me look into that for you.',
            'Sure! How can I help further?',
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const sendMessage = (text: string) => {
        if (text.trim()) {
            setMessages(prev => [
                ...prev,
                {sender: 'user', text},
                {sender: 'bot', text: generateRandomResponse()},
            ]);
        }
    };

    return {isOpen, messages, toggleChat, sendMessage};
};
