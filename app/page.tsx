'use client'

import styles from './page.module.css'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useChat } from '@/hooks/useChat'
import Link from 'next/link'
import { Product } from '@/types/products'
import { LoadingMessage } from './components/LoadingMessage'
import ErrorMessage from './components/ErrorMessage'

export default function Home() {
  const { isOpen, messages, toggleChat, sendMessage } = useChat()
  const [input, setInput] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)
  const [pageTotal, setPageTotal] = useState(0)

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const fetchProductList = await fetch('https://dummyjson.com/products')
      const fetchProductsListJson = await fetchProductList.json()

      setProducts(fetchProductsListJson.products)
      setPageTotal(fetchProductsListJson.total)
      if (fetchProductList.ok) setIsLoading(false)
    } catch (error) {
      console.error('error in fetching products', error)
      setIsError(true)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handlePrevious = () => {
    //TODO implement
  }

  const handleNext = () => {
    const skipTen = 10
  }

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
              <LoadingMessage isLoading={isLoading} />
              <ErrorMessage isError={isError} />
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <Link
                      href={`/products/${product.id}`}
                      className={styles.productLink}
                    >
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
                    <button
                      className={styles.paginationButton}
                      onClick={handlePrevious}
                    >
                      &lt; Previous
                    </button>
                    <button
                      className={styles.paginationButton}
                      onClick={handleNext}
                    >
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
          data-testid="chat-button"
          onClick={toggleChat}
        >
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
                  className={clsx(
                    styles.chatMessage,
                    message.sender === 'bot' ? 'bot' : 'user'
                  )}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className={styles.chatFooter}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type a message..."
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    sendMessage(input)
                    setInput('')
                  }
                }}
              />
              <button
                className={styles.secondaryButton}
                data-testid="message-button"
                onClick={() => {
                  sendMessage(input)
                  setInput('')
                }}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
