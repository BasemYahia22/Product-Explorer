import { useState, useEffect } from 'react'

const API_URL = 'https://fakestoreapi.com/products'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function fetchProducts() {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()

        if (isMounted) {
          setProducts(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Something went wrong while fetching products.')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchProducts()

    return () => {
      isMounted = false
    }
  }, [])

  return { products, isLoading, error }
}
