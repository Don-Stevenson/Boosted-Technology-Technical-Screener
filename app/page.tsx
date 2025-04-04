'use client';

import styles from './page.module.css'
import React, { useState } from 'react';
import clsx from 'clsx';
import { useChat } from '@/hooks/useChat';
import json from '@/data/sample.json';
import Link from 'next/link';
import { Product } from '@/types/products';


export default function Home() {
  const { isOpen, messages, toggleChat, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const [products] = useState(json.products as Product[]);

  const handlePrevious = () => {
    //TODO implement
  };

  const handleNext = () => {
    //TODO implement
  };

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div>
          <h5 className={styles.heading}>Awesome Product List</h5>
        </div>
      </div>
      <div className={styles.content}>
      <div className={styles.tableContainer}>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>SKU</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                <Link href={`/products/${product.id}`} className={styles.productLink}>
                {product.title}
              </Link>
                </td>
                <td>{product.brand}</td>
                <td>{product.sku}</td>
                <td>{product.rating}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className={styles.tableFooter}>
                <div className={styles.footerButtons}>
                  <button className={styles.paginationButton} onClick={handlePrevious}>
                    &lt; Previous
                  </button>
                  <button className={styles.paginationButton} onClick={handleNext}>
                    Next &gt;
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <button
        className={styles.chatButton}
        data-testid='chat-button'
        onClick={toggleChat}>
        Chat
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>Chat Assistant</span>
            <button className={styles.closeButton} onClick={toggleChat}>
              ✖
            </button>
          </div>
          <div className={styles.chatBody}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={clsx(styles.chatMessage,
                  message.sender === 'bot' ? 'bot' : 'user'
                )}>
                {message.text}
              </div>
            ))}
          </div>
          <div className={styles.chatFooter}>
            <input
              type='text'
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder='Type a message...'
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  sendMessage(input);
                  setInput('');
                }
              }}
            />
            <button
              className={styles.secondaryButton}
              data-testid='message-button'
              onClick={() => {
                sendMessage(input);
                setInput('');
              }}>
              Send
            </button>
          </div>
        </div>
      )}
      </div>

    </div>
  )
}
